import axios from "axios";
import * as Types from "./Types";

export const registerUser = (data) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/users/newuser", data);

    dispatch({
      type: Types.Register,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    dispatch({
      type: Types.Register_fail,
      payload: error.message ? error.message : error.response.data.errors,
    });
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/users/signin", data);
    dispatch({
      type: Types.Login,
      payload: res.data,
    });
    console.log("res", res);
  } catch (error) {
    dispatch({
      type: Types.Login_fail,
      payload: error.response.data.msg,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: Types.Logout,
    });
  } catch (error) {
    console.log(error);
  }
};

// get user by id
export const getUser = (id) => (dispatch) => {
  axios.get(`http://localhost:8080/users/${id}`).then(({ data }) =>
    dispatch({
      type: Types.GET_USER,
      payload: data,
    })
  );
};

//update user by id
// export const updateUser = (id, editUser) => (dispatch) => {
//   axios
//     .put(`http://localhost:8080/users/${id}`, editUser).then()
//  // .then((re) => dispatch(getUser(id)));
// };
export const updateUser = (id,user) => async(dispatch) => {
  try {
      const res = await axios.put(`http://localhost:8080/users/${id}`, user);
      dispatch(
          {
              type : Types.UPDATE_USER,
              payload : res.data
          }
      )
  } catch (error) {
      console.log("error",error)
  }
};
