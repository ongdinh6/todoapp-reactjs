class LoginService {

    login(username: string, pwd: string): Promise<any> {
        if (username === "user" && pwd === "password") {
            return Promise.resolve({
                status: 200,
                isAuthenticated: true,
                token: "accesstokenisenabled",
                username: "Authenticated User"
            });
        }

        return Promise.reject({errorMessage: "Your username or password is incorrect!"});
    };

}

const loginService = new LoginService();
export default loginService;
