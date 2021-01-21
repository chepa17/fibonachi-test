import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Mykola Chepkyi Task</h1>
            <div className="links">
                <Link to="/">Fibonachi task</Link>
                <Link to="/toogle">Toggle</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;