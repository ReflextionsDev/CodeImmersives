import React, { Component } from 'react'
import MessageChild from './MessageChild'

export class Message extends Component {
    render() {

        return (
            <div>
                <h1>Hello from message!</h1>
                <h1 style={styles.messageHeader}>The name is {this.props.name}</h1>
                <p>{this.props.message}</p>
                <p>{this.props.num}</p>
                <MessageChild num={this.props.num}/>
            </div>
        )
    }
}

const styles = {
    messageHeader: {
        fontFamily: "Gill Sans",
        fontSize: "2em",
        weight: "bolder",
    }
}

export default Message
