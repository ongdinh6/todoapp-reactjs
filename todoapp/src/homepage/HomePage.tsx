import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <ul>
            <li>
                <Link to={"/"}> HOME </Link>
            </li>
            <li>
                <Link to={"/list"}> TODO LIST </Link>
            </li>
            <li>
                <Link to={"/signin"}> SIGN IN </Link>
            </li>
            <li>
                <Link to={"/todo/create"}> CREATE A TODO ITEM</Link>
            </li>
        </ul>
    );
}

export default HomePage;
