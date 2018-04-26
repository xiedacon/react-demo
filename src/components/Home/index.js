import React, { Component } from 'react'

import intl from '../../intl'

export default class Home extends Component {
  render () {
    return (
      <div>
        { intl.home.welcome }
      </div>
    )
  }
}
