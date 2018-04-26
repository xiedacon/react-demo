import React, { Component } from 'react'

import intl from '../../intl'

import './index.css'

export default class Loader extends Component {
  render () {
    document.querySelector('title').text = intl.meta.loadingTitle

    return <div className='Loader Animate--slow Animate-fadeIn' />
  }
}
