import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic: 'react'
        }
    }
    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
     
    }
    handleCommentsChange = (event) =>
    {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) =>
    {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event =>
    {
        alert(`username: ${this.state.username} and comments: ${this.state.comments} and topic: ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        const {username,comments,topic}= this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input type="text" 
                    value={username}
                    onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>comments</label>
                    <textarea value={comments}
                    onChange={this.handleCommentsChange}>
                     </textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button value="submit">Submit</button>
            </form>
        )
    }
}

export default Form
