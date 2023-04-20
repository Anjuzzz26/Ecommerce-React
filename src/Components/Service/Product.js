import axiosInstance from "../Axios";

const getProduct = () => {
    return axiosInstance.get("product/getProducts");
  };
  
  const getProductDetail = (id) => {
    return axiosInstance.get(`product/getProduct/${id}`);
  };
  
  export default { getProduct, getProductDetail }