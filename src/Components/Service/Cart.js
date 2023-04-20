import axiosInstance from "../Axios";

const addItemToCart = (data) => {
    return axiosInstance.post("cart/addToCart", data);
  };
  
  const getCartDetail = () => {
    return axiosInstance.get("cart/getUserCart",);
  };
  
  const increaseQuantity = (data) => {
    return axiosInstance.post("cart/increaseQuantity",data);
  }
  
  const decreaseQuantity1 = (data) => {
    return axiosInstance.post("cart/decreaseQuantity1",data);
  }
  
  const clearCart = () => {
    return axiosInstance.post("cart/clearCart");
  }

  const deleteSingleItem = (id) => {
    return axiosInstance.post("cart/deleteItem",id);
  }
 
  export default { addItemToCart, getCartDetail, increaseQuantity, decreaseQuantity1, clearCart, deleteSingleItem };