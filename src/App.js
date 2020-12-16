import React, {Component} from "react";
import CheckoutFormPersonal from "./componets/basket/personalinfo";
import CheckoutFormShipping from "./componets/basket/shippingInfo";
import CheckoutFormBilling from "./componets/basket/billingInfo";
import './App.css';


export default class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,

      name: "",
      email: "",

      shipping_line: "",
      shipping_city: "",
      shipping_zip: "",

      billing_line: "",
      billing_city: "",
      billing_zip: ""
    };
    this.goToNext = this.goToNext.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
  }

  goToNext() {
    const { step } = this.state;
    if (step !== 3) {
      this.setState({ step: step + 1 });
    } else {
      alert("Submitting");

      const values = {
        name: this.state.name,
        email: this.state.email,
        shipping: {
          line: this.state.shipping_line,
          city: this.state.shipping_city,
          zip: this.state.shipping_zip
        },
        billing: {
          line: this.state.billing_line,
          city: this.state.billing_city,
          zip: this.state.billing_zip
        }
      };
      // submit `values` to the server here.
      console.log(values)
    }
  }

  goToPrev() {
    const { step } = this.state;

    if (step !== 1) {
      this.setState({ step: step - 1 });
    }
  }

  handleChange(field) {
    return evt => this.setState({ [field]: evt.target.value });
  }

  render() {
    if (this.state.step === 1) {
      return (
          <CheckoutFormPersonal
              key="personal"
              onSubmit={this.goToNext}
              name={this.state.name}
              email={this.state.email}
              onChangeName={this.handleChange("name")}
              onChangeEmail={this.handleChange("email")}
          />
      );
    }
    if (this.state.step === 2) {

      return (
          <CheckoutFormShipping
              key="shipping"
              onSubmit={this.goToNext}
              onPrev={this.goToPrev}
              shippingLine={this.state.shipping_line}
              shippingCity={this.state.shipping_city}
              shippingZip={this.state.shipping_zip}
              onChangeShippingLine={this.handleChange("shipping_line")}
              onChangeShippingCity={this.handleChange("shipping_city")}
              onChangeShippingZip={this.handleChange("shipping_zip")}
          />
      );
    }
      if (this.state.step === 3) {
        return (
            <CheckoutFormBilling
                key="billing"
                onSubmit={this.goToNext}
                onPrev={this.goToPrev}
                billingLine={this.state.billing_line}
                billingCity={this.state.billing_city}
                billingZip={this.state.billing_zip}
                onChangeBillingLine={this.handleChange("billing_line")}
                onChangeBillingCity={this.handleChange("billing_city")}
                onChangeBillingZip={this.handleChange("billing_zip")}
            />
        );
      }
    }
  }





