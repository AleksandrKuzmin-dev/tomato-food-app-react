import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartItems.slice';
import { assets } from '../../assets/assets';

import './foodItem.css';

const FoodItem = ({ item }) => {
    const { _id: id, name, price, description, image } = item;
    const dispatch = useDispatch();

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt={name} />
                <button className="add">
                    <img src={assets.add_icon_white} alt="" />
                </button>

                {/* <div className="food-item-counter">
                    <button>
                        <img src={assets.remove_icon_red} alt=""/>
                    </button>
                    <p>0</p>
                    <button>
                        <img src={assets.add_icon_green} alt="" />
                    </button>
                </div> */}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
