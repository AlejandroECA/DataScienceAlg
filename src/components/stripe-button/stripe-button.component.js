import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IO57NF4Zy6LpazsnedDAuis3bU9rDEMmpDnRF2RYPRhGogmFntypgogEw0voZsC0NCSxP1yKyCo1MBmXJEnP7jd00JjcKoLAa';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='App Store Test'
            billingAddress
            shippingAddress
            image='https://freesvg.org/img/1531387809.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey= {publishableKey}
        />
    )


}

export default StripeCheckoutButton

// https://svgshare.com/i/CUz.svg