import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    debugger;
    return (
      <StripeCheckout
        //amount is in dollars
        amount={500}
        //token we are getting back from stripe
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;
