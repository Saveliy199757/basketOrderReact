import React, {Component} from 'react';

export default class CheckoutFormPersonal extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.onSubmit();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Personal info</h3>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={this.props.name}
                    onChange={this.props.onChangeName}
                />
                <input
                    type="text"
                    placeholder="Enter email"
                    value={this.props.email}
                    onChange={this.props.onChangeEmail}
                />

                <button>Next</button>
            </form>
        );
    }
}