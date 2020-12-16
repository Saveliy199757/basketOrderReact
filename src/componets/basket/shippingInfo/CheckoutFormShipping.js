import React, {Component} from "react";

export default class CheckoutFormShipping extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.onSubmit();
    }
    handlePrev(evt) {
        evt.preventDefault();
        this.props.onPrev();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Shipping</h3>
                <input
                    type="text"
                    placeholder="Address line"
                    value={this.props.shippingLine}
                    onChange={this.props.onChangeShippingLine}
                />
                <input
                    type="text"
                    placeholder="City"
                    value={this.props.shippingCity}
                    onChange={this.props.onChangeShippingCity}
                />
                <input
                    type="text"
                    placeholder="ZIP"
                    value={this.props.shippingZip}
                    onChange={this.props.onChangeShippingZip}
                />
                <div className='btn_block'>
                    <button type='button' onClick={this.handlePrev}>Prev</button>
                    <button>Checkout</button>
                </div>
            </form>
        );
    }
}
