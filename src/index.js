import React from 'react'
import ReactDOM from 'react-dom'
import HelloComponent from './components/HelloComponent'
import './index.css'

const RootComponent = React.createClass({
  render: () => (
    <HelloComponent />
  )
})

const rootElement = document.getElementById('tdd-workshop')
ReactDOM.render(<RootComponent />, rootElement)

