import { ADD_PRODUCT, GET_PRODUCTS, GET_PRODUCT, UPDATE_PRODUCT } from "./Types";
import { useDispatch } from "react-redux";
import axios from "axios";

export const addProduct = (newproduct) => (dispatch) => {
  axios
    .post("http://localhost:8080/products/newproduct", newproduct)
    .then(({ data }) =>
      dispatch({
        type: ADD_PRODUCT,
        payload: data,
      })
    )
    .catch((err) => alert("ERROR IN ADD NEW USER"));
};

export const getProducts = () => (dispatch) => {
  axios.get("http://localhost:8080/products/").then(
    ({ data }) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      })
    //.catch((err)=>{alert("ERROR IN GET USERS")})
  );
};

//get one product
export const getProduct = (id) => (dispatch) => {
  axios.get(`http://localhost:8080/products/${id}`).then(({ data }) =>
    dispatch({
      type: GET_PRODUCT,
      payload: data,
    })
  );
};

// Update products by id

export const editProductById = (id, editProduct) => (dispatch) => {
  axios
    .put(`http://localhost:8080/updateUser/${id}`, editProduct)
    .then((re) => dispatch(getProduct(id)));
};

//Delete Product By Id 
export const deleteProduct = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/products/${id}`);
  dispatch({
    type: "DELETE",
  });

  dispatch(getProducts());
};

//* Edit Product

export const updateProduct = (id,user) => async(dispatch) => {
  try {
      const res = await axios.put(`http://localhost:8080/products/${id}`, user);
      dispatch(
          {
              type : UPDATE_PRODUCT,
              payload : res.data
          }
      )
  } catch (error) {
      console.log("error",error)
  }
};
