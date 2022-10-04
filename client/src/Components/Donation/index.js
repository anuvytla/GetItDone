import './index.css';
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    useElements,
    useStripe,  
    PaymentElement,
  } from "@stripe/react-stripe-js";
  

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Donation = () => {
    return (
        <Elements stripe={stripePromise}>
            <DonationForm/>
        </Elements>
    )
}

const DonationForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!stripe || !elements) {
          return;
        }
    
        const result = await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: "https://www.google.com",
          },
        });
    
        if (result.error) {
          console.log(result.error.message);
        } else {

        }
      };
    

    return(
        <>
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={!stripe}>Donate</button>
        </form>
        </>
    )
}

export default Donation;