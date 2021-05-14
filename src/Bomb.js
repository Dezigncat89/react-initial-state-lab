import React, { Component } from 'react'
class Bomb extends Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  increment = () => {
    console.log(`before setState: ${this.state.count}`)

    this.setState({
      count: this.state.count + 1
    })

    console.log(`after setState: ${this.state.count}`)
  }

  render() {
    return (
      <div onClick={this.increment}>
        {this.state.count}
      </div>
    )
  }
}
