import React, { Component } from 'react';
import api from '../services/api';

import './tonew.css';

class New extends Component {
    state = {
        task: '',
        info: '',
    }

    handleSubmit = async e => {
        e.preventDefault();
        
        let data = new FormData();
        data.append('task', this.state.task);
        data.append('info', this.state.info);
        this.PostOnBackend(data);
        this.ReturnToMainPage();
    }

    async PostOnBackend(data) {
        return await api.post('tasks', data);
    }
        
    ReturnToMainPage() {
        return this.props.history.push('/')
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div id="main">
                <form id="main-box" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="task"
                        placeholder="New task"
                        onChange={this.handleChange}
                        value={this.state.task} 
                        id="task"
                    />
                    <input
                        type="text"
                        name="info"
                        placeholder="Info"
                        onChange={this.handleChange}
                        value={this.state.info} 
                        id="info"
                    />
                    <button type="submit">create</button>
                </form>
            </div>
        )
    };
}

export default New;