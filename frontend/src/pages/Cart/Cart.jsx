import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/slices/cartItems.slice';
import './cart.css';

const Cart = () => {
    const cartItems = useSelector(selectCartItems);

    return (
        <div>
            {Object.values(cartItems).map((item) => (
                <>
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>
                </>
            ))}
        </div>
    );
};

export default Cart;
