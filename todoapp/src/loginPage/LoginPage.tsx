import { Link, useNavigate } from "react-router-dom";
import loginService from "./service/loginService";
import { useState } from "react";

const LoginService = loginService;
const enum FormFields {
    UNAME = "Username",
    PWD = "Password"
};

const LoginPage = () => {
    const navigate = useNavigate();

    const [uname, setUname] = useState("");
    const [pwd, setPwd] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (username: string, pwd: string) => {
        LoginService.login(username, pwd)
            .then((response: any) => {
                console.log("Login Success with the user details: ", response);
                // Todo: navigate to the previous page
                navigate("/");
            })
            .catch((error: any) => {
                console.error("Login Failed with details: ", error)
                setErrorMessage(error.errorMessage);
            });
    }


    const onFieldChange = (e: any, type: FormFields) => {
        switch (type) {
            case FormFields.UNAME:
                setUname(e.target.value);
                break;
            case FormFields.PWD:
                setPwd(e.target.value);
                break;
            default:
                throw Error("Cannot handle onChange the unknown type!");
        }
    }


    return <div>
        <small style={{ color: "red" }}>{errorMessage}</small>
        <div>
            <label>Username:</label>
            <input title="Type username here!" type="text" onChange={(e) => onFieldChange(e, FormFields.UNAME)} />
        </div>
        <div>
            <label>Password:</label>
            <input title="Type password here!" type="password" onChange={(e) => onFieldChange(e, FormFields.PWD)} />
        </div>
        <button onClick={() => handleSubmit(uname, pwd)}>Submit</button>
        <Link to="/">Go to Home page</Link>
    </div >
}

export default LoginPage;
