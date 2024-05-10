import { useSelector } from 'react-redux';
import { selectTotalAmount } from '../../store/slices/cartItems.slice';

import './placeOrder.css';

const PlaceOrder = () => {
    const totalAmount = useSelector(selectTotalAmount);

    return (
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>

                <input type="email" placeholder="Email address"></input>
                <input type="text" placeholder="Street"></input>
                <div className="multi-fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Zip code" />
                    <input type="text" placeholder="Country" />
                </div>
                <input type="text" placeholder="Phone" />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${totalAmount}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${totalAmount === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${totalAmount === 0 ? 0 : totalAmount + 2}</b>
                        </div>
                    </div>
                    <button>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
