import React, {Component} from 'react';
import Buttons from "./Buttons";

const LOCAL_STORAGE_KEY = 'value';

class Counter extends Component {
    state = {
        value: 0,
    };

    inc = () => {
        this.setState({value: this.state.value + 1})
    };

    dec = () => {
        this.setState({value: this.state.value - 1})
    };

    incByFive = () => {
        this.setState({value: this.state.value + 5})
    };

    decByFive = () => {
        this.setState({value: this.state.value - 5})
    };

    reset = () => {
        this.setState({value: 0})
    };


    render() {
        return (
            <div
            style={{
                width: '50%',
                padding: '20px',
                border: '1px solid #ddd',
                margin: '0 auto',

            }}
            >
                <h1
                    style={{
                        width: '20px',
                        margin: '0 auto 10px auto'
                    }}
                >{this.state.value}</h1>
                <Buttons
                    value={this.state.value}
                    inc={this.inc}
                    dec={this.dec}
                    incByFive={this.incByFive}
                    decByFive={this.decByFive}
                    reset={this.reset}
                />
            </div>
        );
    }
}

export default Counter;