import axios from "axios";

const STRIPE_KEY = "sk_live_51XXXXXXXXXXXXXXXX";

export const createPayment = async () => {
  return axios.post(
    "https://api.stripe.com/v1/payment_intents",
    {},
    {
      headers: {
        Authorization: `Bearer ${STRIPE_KEY}`
      }
    }
  );
};