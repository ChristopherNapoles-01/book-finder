import { Link} from "react-router-dom";
const Header = () => {
    return(
        <div id="header">
            <div className="text-center">
                <h1>Book Worm Library</h1>
            </div>
            <nav>
                <Link to={'/'}>
                    <p className="home">Home</p>
                </Link>
                <Link to={'/AboutUs'}>
                    <p className="home">About Us</p>
                </Link>
            </nav>
        </div>
    )
}

export default Header;