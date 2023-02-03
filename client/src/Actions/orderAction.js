import { GET_ORDER, GET_ORDERS } from "./Types";
import { useDispatch } from "react-redux";
import axios from "axios";



//Get Orders
export const getOrders = () => (dispatch) => {
    axios.get(`http://localhost:8080/orders/`).then(({ data }) =>
      dispatch({
        type: GET_ORDERS,
        payload: data,
      })
    );
  };
// get order by id
export const getOrder = (id) => (dispatch) => {
    axios.get(`http://localhost:8080/orders/${id}`).then(({ data }) =>
      dispatch({
        type: GET_ORDER,
        payload: data,
      })
    );
  };
  
  // Archieve Order BY iD
  