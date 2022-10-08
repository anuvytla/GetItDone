import './index.css';
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    useElements,
    useStripe, 
    CardElement 
  } from "@stripe/react-stripe-js";
  import { useState } from 'react';
  

const stripePromise = loadStripe('pk_test_51LpO6EAdB0A1DfZyIYEp2su4jFGm8NsleOXZaggin50n6T36fg2oHsMFxECbmsdAUyt0wgOZTywZ9m6qHWv6Ms3i00tyQ5wI8A');

const Donation = () => {
    return (
        <Elements stripe={stripePromise}>
            <DonationForm/>
        </Elements>
    )
}

const DonationForm = () => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [donationAmount, setDonationAmount] = useState(0);
    const [disabled, setDisabled] = useState(true);

    const stripe = useStripe();
    const elements = useElements();
    
    const handleChange = async (event) => {
      // Listen for changes in the CardElement and display any errors as the customer types their card details
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
    };

    const handleSubmit = async (ev) => {
      ev.preventDefault();
      setProcessing(true);

      const res = await fetch("/payment-intent", {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ amount: donationAmount }),
                              });
      const paymentIntentJSON = await res.json();
      const clientSecret = paymentIntentJSON.clientSecret;

    // Confirm Card Payment.                                   
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      if (payload.error) {
        setError(`Payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
      }
    };

    //  Donate UI.
    return (
      <form id="donation-form" onSubmit={handleSubmit}>
        <input type='number' min='0.50' step='0.01' placeholder='2.00' id='donation-amount' value={donationAmount} 
                onChange={event => setDonationAmount(event.target.value)}
          />
        <CardElement 
          id="card-element"
          options={{}} 
          onChange={handleChange}
        />
        <button disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Donate"}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">{error}</div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>Thank you for the donation!</p>
      </form>
    );
}


export default Donation;