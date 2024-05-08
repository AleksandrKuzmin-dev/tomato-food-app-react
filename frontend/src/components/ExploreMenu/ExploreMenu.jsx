import useInViewBlock from '../../hooks/useInViewBlock';
import { menu_list } from '../../assets/assets';
import './exploreMenu.css';

const ExploreMenu = ({ category, setCategory }) => {
    const ref = useInViewBlock('menu', 0.9);

    const changeCategory = (item) => {
        setCategory((state) => (state === item.menu_name ? 'all' : item.menu_name));
    };

    return (
        <div className="explore-menu" id="explore-menu" ref={ref}>
            <h1>Explore our menu</h1>
            <p className="explore-menu-text">
                Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your
                cravings and elevate your dining experience, one delicious meal at a time.
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item, i) => {
                    return (
                        <div onClick={() => changeCategory(item)} key={i} className="explore-menu-list-item">
                            <img
                                className={category === item.menu_name ? 'active' : ''}
                                src={item.menu_image}
                                alt={item.menu_name}
                            />
                            <p>{item.menu_name}</p>
                        </div>
                    );
                })}
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;
