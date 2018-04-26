import React, { Component } from 'react'

import Logo from '../Logo'
import LocaleSwitcher from '../LocaleSwitcher'

import config from '../../config'
import intl from '../../intl'

import './index.css'

export default class NavBar extends Component {
  render () {
    let current = window.location.pathname.split('/featured/')[1]
    let links = config.features.map(feature =>
      <a key={feature} href={`/featured/${feature}`} className={`NavBar-link ${feature === current ? 'selected' : ''}`}>
        {intl.features[feature]}
      </a>
    )

    return (
      <div className='NavBar'>
        <div className='NavBar-title'>
          <a href='/'><Logo /></a>
        </div>
        <div className='NavBar-links'>{links}</div>
        <div className='NavBar-locales'>
          <LocaleSwitcher />
        </div>
      </div>
    )
  }
}
