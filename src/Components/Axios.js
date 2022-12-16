import axios from "axios";

const baseUrl = "https://api-ecommerce-dev.devtomaster.com/v1/";
const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.request.use((request) => {
  return request;
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    const errorObject = {
      code: 500,
      message: "Email is already in use",
      customCode: 500,
    };
    if (error.response) {
      errorObject.code = error.response.status;
    } else if (error.request) {
    } else {
      errorObject.message = "Something went wrong";
    }
    if (
      errorObject.code === 401 ||
      errorObject.code === 4006 ||
      errorObject.code === 408
    ) {
      console.log("checking request data");
      window.location.href = `/home`;
      return { data: {} };
    }
    return Promise.reject(errorObject);
  }
);

export default axiosInstance;
