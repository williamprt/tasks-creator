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

        const data = new FormData();
        data.append('task', this.state.task);
        await api.post('tasks', data);
        this.props.history.push('/');
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
                        placeholder="aaaa"
                        onChange={this.handleChange}
                        value={this.state.task} 
                    />
                    <button type="submit">aaaa</button>
                </form>
            </div>
        )
    };
}

export default New;