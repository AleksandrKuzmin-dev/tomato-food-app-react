import { Link } from 'react-router-dom';
import './pageNotFound.css';

const NotFound = () => {
    return (
        <div className="page-not-found">
            <h1>Oops! 🍅 <br />
            Page Not Found</h1>
            <p>
                We must've squished this page by mistake. The content you’re looking for might have been moved or no
                longer exists. But don't let this hiccup stop you from exploring all the flavorful opportunities at
                Tomato.
            </p>
            <Link to="/">Return to the Home</Link>
        </div>
    );
};

export default NotFound;
