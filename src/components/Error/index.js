import React, { Component } from 'react'

import intl from '../../intl'

export default class Error extends Component {
  render () {
    let { code } = this.props
    code = code || 500

    document.querySelector('title').text = intl.meta[code === 404 ? 'notFoundTitle' : 'errorTitle']

    return (
      <div>
        {
          code === 404
            ? (<span>{intl.meta.notFoundTitle}</span>)
            : (<h1>Error displaying this page</h1>)
        }
      </div>
    )
  }
}
