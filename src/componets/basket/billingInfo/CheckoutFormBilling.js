import React, {Component} from "react";

export default class CheckoutFormBilling extends Component {
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
                <h3>Billing</h3>
                <input
                    type="text"
                    placeholder="Address line"
                    value={this.props.billingLine}
                    onChange={this.props.onChangeBillingLine}
                />
                <input
                    type="text"
                    placeholder="City"
                    value={this.props.billingCity}
                    onChange={this.props.onChangeBillingCity}
                />
                <input
                    type="text"
                    placeholder="ZIP"
                    value={this.props.billingZip}
                    onChange={this.props.onChangeBillingZip}
                />
                 <div className='btn_block'>
                     <button type='button' onClick={this.handlePrev}>Prev</button>
                     <button>Checkout</button>
                 </div>

            </form>
        );
    }
}