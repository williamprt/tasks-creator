import React, { Component } from 'react';
import io from 'socket.io-client';
import api from '../services/api';

import './tomain.css'

class Main extends Component {
    state = {
        products: [],
    }

    componentDidMount() {
        this.registerToSocket();
        this.GetAndDefineState();
        console.log('ok')
    }

    registerToSocket = () => {
        const socket = io('https://taskcreatorbackend.herokuapp.com');
        socket.on('products', newTask => {
            this.setState({ products: [newTask, ...this.state.products] });
        });
    }

    GetAndDefineState = async () => {
        let response = await api.get('/tasks')
        this.setState({products: response.data})
    }

    render() {
        return (
            <div className="principal">
                <section id="boxone">
                    { this.state.products.map(data => (
                        <article id="boxone-elements">
                            <div key={data._id} id="items">
                                <span id="task">{data.task}</span>
                                <span id="info">{data.info}</span>
                            </div>
                        </article>
                    )) }
                </section>
            </div>
        )
    };
}

export default Main;