import { assets } from '../../assets/assets';
import './foodItemRating.css';

const FoodItemRating = ({ rating = '0' }) => {

    const viewRating = () => {
        const finalRating = [];
        const stars = ['1', '2', '3', '4', '5'];
        
        stars.forEach((item, index) => {
            if (rating >= index + 1) {
                finalRating.push(<img src={assets.rating_stars_fill} alt={`Rating star ${index + 1}`} key={index} />)
            } else {
                finalRating.push(<img src={assets.rating_stars} alt={`Empty rating star ${index + 1}`} key={index} />)
            }
        })
        return finalRating;
    } 
    return (
        <div className="food-item-rating">
            {viewRating()}
        </div>
    );
};

export default FoodItemRating;
