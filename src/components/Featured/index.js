import React, { Component } from 'react'
import axios from 'axios'

import Loader from '../Loader'

import intl from '../../intl'
import config from '../../config'

import './index.css'

export default class Featured extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false,
      photos: []
    }
  }

  componentDidMount () {
    this.request = axios({
      method: 'get',
      url: `${config.apiRoot}/photos`,
      params: {
        consumer_key: config.consumerKey,
        image_size: 4,
        feature: /^\/featured\/(\w+)$/.exec(window.location.pathname)[1]
      }
    }).then(({ data }) => this.setState({ photos: data.photos, loaded: true }))
  }

  componentWillUnmount () {
    this.request.abort()
  }

  render () {
    document.querySelector('title').text = intl.featured.documentTitle.replace('{feature}', /^\/featured\/(\w+)$/.exec(window.location.pathname)[1])

    let { photos, loaded } = this.state
    let content = loaded
      ? photos.map((photo) => <a key={photo.id} href={`/photo/${photo.id}`} className='Thumbnail' style={{ backgroundImage: `url("${photo.image_url}")` }} />)
      : (<Loader />)

    return (
      <div className='ThumbnailCollection'>
        { content }
      </div>
    )
  }
}
