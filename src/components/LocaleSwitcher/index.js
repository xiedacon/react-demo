import React, { Component } from 'react'

import config from '../../config'

import './index.css'

export default class LocaleSwitcher extends Component {
  click (locale) {
    window.localStorage.setItem('hl', locale)
    window.location.reload()
  }

  render () {
    let current = window.localStorage.getItem('hl') || 'en'

    let locales = config.locales.map(locale =>
      <a key={locale}
        className={`LocaleSwitcher-link ${locale === current ? 'active' : ''}`}
        onClick={this.click.bind(this, locale)}>
        { locale }
      </a>
    )

    return (
      <div className='LocaleSwitcher'>
        { locales }
      </div>
    )
  }
}
