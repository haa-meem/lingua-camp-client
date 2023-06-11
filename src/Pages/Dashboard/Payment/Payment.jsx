import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useEnroll from "../../../Hooks/useEnroll";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [enroll] = useEnroll();
    const total = enroll.reduce((sum, item) => sum + item.classPrice, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-[70%]">
            <h2 className="text-3xl font-semibold text-center mb-5">Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;