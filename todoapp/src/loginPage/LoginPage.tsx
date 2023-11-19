import { Link, useNavigate } from "react-router-dom";
import loginService from "./service/login.service";
import { useState } from "react";
import { useAppDispatch } from "../state/app.hooks";
import { loginFail, loginLoading, loginSuccess } from "./state/login.reducer";
import { selectPayload } from "./state/login.selector";
import { store } from "../state/app.store";

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

    // Use store
    const dispatch = useAppDispatch();
    const authSelector = selectPayload(store.getState());

    const handleSubmit = (username: string, pwd: string) => {
        dispatch(loginLoading());

        LoginService.login(username, pwd)
            .then((response: any) => {
                console.log("Login Success with the user details: ", response);
                dispatch(loginSuccess(response));
                // Todo: navigate to the previous page
                navigate(-1);
            })
            .catch((error: any) => {
                console.error("Login Failed with details: ", error)
                dispatch(loginFail(error));
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
        {
            authSelector !== null && authSelector.isAuthenticated ?
                <>
                    <h3>Welcome, {authSelector.username} to Todo App!</h3>
                    <Link to={"/logout"}> LOGOUT </Link>
                    <br />
                </>
                :
                <>
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
                </>
        }
        <Link to="/">Go to Home page</Link>
    </div >
}

export default LoginPage;
