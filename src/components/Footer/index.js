import React, { Component } from 'react'

import './index.css'

export default class Footer extends Component {
  render () {
    return (
      <div className='Footer'>
        <div className='Footer-disclaimer'>
          Data from <a href='https://500px.com'>500px</a>. Photos copyrights of their respective authors.
        </div>
        <div>
          <strong>isomorphic500</strong> is demo app built in <a href='https://facebook.github.io/react/'>React</a> with <a href='http://www.fluxible.io'>Fluxible</a>. See the <a href='https://github.com/gpbl/isomorphic500'>project’s page</a> on Github or try something
          exciting: <a className='Footer-link' href='/bad'>a bad route</a> or <a className='Footer-link' href='/photo/100000000'>an unexisting photo</a>.
        </div>
      </div>
    )
  }
}
