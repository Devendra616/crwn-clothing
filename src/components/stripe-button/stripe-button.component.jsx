import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price*100; //stripe takes in cents or paise
    const publishableKey = 'pk_test_bLgGVZhzO7IhJbrApwZTbW6X00iyP2mSDc';
    
    //onsuccess callback for stripe
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image = 'http://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    );
}

export default StripeCheckoutButton;