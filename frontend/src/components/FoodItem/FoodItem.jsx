import { useDispatch, useSelector } from 'react-redux';
import { addToCart, reduceFromCart } from '../../store/slices/cartItems.slice';
import { selectCartItemById } from '../../store/slices/cartItems.slice';
import { assets } from '../../assets/assets';

import './foodItem.css';
import FoodItemRating from '../FoodItemRating/FoodItemRating';

const FoodItem = ({ item }) => {
    const { _id: id, name, price, description, image, rating } = item;

    const dispatch = useDispatch();
    const itemCart = useSelector(selectCartItemById(id));

    const btnAddCart = (
        <button onClick={() => dispatch(addToCart({id, item}))} className="add">
            <img src={assets.add_icon_white} alt="" />
        </button>
    )

    const counter = (
        <div className="food-item-counter">
            <button onClick={() => dispatch(reduceFromCart(id))}>
                <img src={assets.remove_icon_red} alt="" />
            </button>
            <p>{itemCart?.quantity}</p>
            <button onClick={() => dispatch(addToCart({id, item}))}>
                <img src={assets.add_icon_green} alt="" />
            </button>
        </div>
    )
    const buttons = itemCart?.quantity ? counter : btnAddCart;

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt={name} />
                {buttons}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <FoodItemRating rating={rating} />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
