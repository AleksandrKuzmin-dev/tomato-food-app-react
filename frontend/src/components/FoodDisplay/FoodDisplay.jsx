import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFoodCatalog, selectFoodCatalog } from '../../store/slices/foodCatalog.slice';
import useInViewBlock from '../../hooks/useInViewBlock';
import FoodItem from '../FoodItem/FoodItem';

import './foodDisplay.css';

const FoodDisplay = ({ category }) => {
    const dispatch = useDispatch();
    const foodCatalog = useSelector(selectFoodCatalog);
    const ref = useInViewBlock('menu', 0.2);

    useEffect(() => {
        dispatch(setFoodCatalog());
    }, []);

    return (
        <div className="food-display" id="food-display" ref={ref}>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {foodCatalog.map((item) => {
                    if (category === 'all' || item.category === category) {
                        return <FoodItem key={item._id} item={item} />;
                    }
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
