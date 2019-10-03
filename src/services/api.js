import axios from "./axios";

export default {
  login: user => axios.post("/auth/login", user)
};
