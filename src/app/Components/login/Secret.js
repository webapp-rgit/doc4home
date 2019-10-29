import React, { Component } from 'react';

class Secret extends Component{
    constructor(){
        super();
        // Set default message
        this.state = {
            message: 'Loanding...'
        }
    }
    componentDidMount(){
        // GET message from server using fetch API
        fetch('/api/secret')
            .then(res => res.text())
            .then(res => this.setState({
                message: res
            }))
    }
    render(){
        return(
            <div>
                <h1>Secret</h1>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default Secret;