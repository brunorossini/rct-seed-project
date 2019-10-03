import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    // Do something with response error
    if (error.response.status === 401) {
      console.log("unauthorized, logging out ...");
      // auth.logout();
      // router.replace('/auth/login');
    }
    return Promise.reject(error.response);
  }
);

export default instance;
