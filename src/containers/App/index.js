import React, { Component } from 'react'

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Error from '../../components/Error'
import routers from '../../routers'

import intl from '../../intl'

import './index.css'

class App extends Component {
  render () {
    document.querySelector('title').text = intl.meta.title

    let Handler = routers[/^(\/\w*).*$/.exec(window.location.pathname)[1]]

    return (
      <div className='App'>
        <div className='App-header'>
          <NavBar />
        </div>
        <div className='App-body'>
          {
            Handler
              ? (<Handler />)
              : (<Error code={404} />)
          }
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
