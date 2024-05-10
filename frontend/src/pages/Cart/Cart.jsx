import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectTotalAmount, removeFromCart } from '../../store/slices/cartItems.slice';
import './cart.css';

const Cart = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    const totalAmount = useSelector(selectTotalAmount);



    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {Object.values(cartItems).map((item) => (
                    <div key={item._id}>
                        <div className="cart-items-title cart-items-item">
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <p>{item.quantity}</p>
                            <p>${item.price * item.quantity}</p>
                            <button onClick={() => dispatch(removeFromCart(item._id))} className="cross">
                                x
                            </button>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
            <div className="cart-bottom">
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
                            <p>${2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${totalAmount + 2}</b>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, Enter it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder="promo code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
