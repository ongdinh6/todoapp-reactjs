import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3003",
    timeout: 1000
});


// Handle 404 error
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    console.log("axios error: ", error);
    return Promise.reject(error);
  }
);

export { axiosInstance };
