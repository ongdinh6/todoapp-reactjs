import { Link } from "react-router-dom";

const LoginPage = () => {

    return <div>
        <div>
            <label>Username:</label>
            <input title="Type username here!" type="text" />
        </div>
        <div>
            <label>Password:</label>
            <input title="Type password here!" type="password" />
        </div>
        <button>Submit</button>
        <Link to="/">Go to Home page</Link>
    </div>
}

export default LoginPage;
