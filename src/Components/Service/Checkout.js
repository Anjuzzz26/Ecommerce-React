import axiosInstance from "../Axios";

const newOrder = (data) => {
    return axiosInstance.post("order/newOrder", data);
  };

export default { newOrder };