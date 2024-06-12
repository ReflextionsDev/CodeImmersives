import React, { Component } from 'react'

export class MessageChild extends Component {
  render() {
    console.log(this.props)
    return (
      <div>MessageChsssild</div>
    )
  }
}

export default MessageChild