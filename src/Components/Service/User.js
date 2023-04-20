import axiosInstance from "../Axios";

const signup = (data) => {
  return axiosInstance.post("user/create", data);
};


const login = (data) => {
    return axiosInstance.post("user/login", data);
};

const getCurrentUserDetails = () => {
  return axiosInstance.get("user/getCurrentUserDetails");
};

const updateCurrentUser = (data,config) => {
  return axiosInstance.put("user/updateCurrentUser",data,config);
}


export default { signup, login, getCurrentUserDetails, updateCurrentUser };