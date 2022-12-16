import axiosInstance from "../Axios";

const signup = (data) => {
  return axiosInstance.post("/user/create", data);
};


const login = (data) => {
    return axiosInstance.post("/user/login", data);
};

export default { signup,login };