import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_8fd4DJ8Z5klSDDQbvJW5w5Rj'

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

return (
    <StripeCheckout 
     label='Pay Now'
     name='CRWN Clothing'
     billingAddress
     shippingAddress
     image='https://svgshare.com/i/CUz.svg'
     description={`Your total is $${price}`}
     amount={priceForStripe}
     panelLabel='PayNow'
     token={onToken}
     stripeKey={publishableKey}
    />
)

}

export default StripeCheckoutButton;
