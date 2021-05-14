import React, { Component } from 'react'
 class ImageSlider extends Component {

  constructor(props) {
    super(props)
    state = {
      currentSlideIndex: 0
    }
  }
}

 slideIncrement = () => {
  this.setState({ currentSlideIndex: this.state.currentSlideIndex + 1 })
}

slideDecrement = () => {
  this.setState({ currentSlideIndex: this.state.currentSlideIndex - 1})

  render() {
  return(
    <div>
    <div>
      {this.state.currentSlideIndex}
    </div>
    <button onClick ={this.slideIncrement}>Increment by 1</button>
    <button onClick ={this.slideDecrement}>Decrement by 1</button>
      )
    }
 }


