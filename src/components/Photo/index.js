import React, { Component } from 'react'
import axios from 'axios'

import Loader from '../Loader'

import config from '../../config'
import intl from '../../intl'

import './index.css'

export default class Photo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false,
      photo: {}
    }
  }

  componentDidMount () {
    this.request = axios({
      method: 'get',
      url: `${config.apiRoot}/photos/${/^\/photo\/(\d+)$/.exec(window.location.pathname)[1]}`,
      params: {
        consumer_key: config.consumerKey,
        image_size: 1600
      }
    }).then(({ data }) => {
      let photo = data.photo
      document.querySelector('title').text = `${intl.photo.documentTitle.replace('{name}', photo.name).replace('{user}', photo.user.fullname)}`
      this.setState({ photo, loaded: true })
    }).catch((err) => {
      if (err.response.status === 404) window.location.href = '/404'
      else window.location.href = '/bad'
    })
  }

  componentWillUnmount () {
    this.request.abort()
  }

  render () {
    let { photo, loaded } = this.state
    let content = loaded
      ? (
        <div>
          <h1>{ photo.name }</h1>
          <div className='PhotoMeta'>
            <span>
              { `${intl.photo.attribution.replace('{userLink}', '')}` }
              <a href={`https://500px.com/${photo.user.username}`}>{ photo.user.fullname }</a>
            </span>
            <div>
              <span>{ new Date(photo.created_at).toLocaleDateString(window.localStorage.getItem('hl') || 'en', { year: 'numeric', month: 'long', day: 'numeric' }) }</span>
              { ' ' }
            </div>
            <span>
              { `${intl.photo.rating.replace('{rating}', photo.rating)}` }
            </span>
          </div>
          <a href={`https://500px.com/photo/${photo.id}`}>
            <img style={{width: '100%', height: 'auto'}} src={photo.image_url} alt={photo.name} />
          </a>
        </div>
      )
      : (<Loader />)

    return content
  }
}
