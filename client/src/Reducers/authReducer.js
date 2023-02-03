import * as Types from "../Actions/Types";
import React from "react";

const initialstate = {
  isAuth: false,
  token: localStorage.getItem("token") ,
  errors: null,
  user: null,

};
const authReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case Types.Register:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        errors: null,
        isAuth: true,
      };
    case Types.Login:
      // localStorage.setItem("auth-token", payload.token);
      // localStorage.setItem("isAuth", true);
      // localStorage.setItem("existuser", JSON.stringify(payload.existuser));

      return {
        ...state,
        user: payload.user,
        token: payload.token,
        errors: null,
        isAuth: true,
        existuser: JSON.parse(localStorage.getItem("existuser")),
      };
    case Types.Register_fail:
    case Types.Login_fail:
      return { ...state, errors: payload, isAuth: false };

    case Types.Logout:
      localStorage.clear();
      return {
        user: null,
        token: null,
        isAuth: false,
        errors: null,
      };
      case Types.GET_USER:
      
      return { ...state, user: payload , errors: null };

      case Types.UPDATE_USER:
      
      return { ...state, user: payload ,errors: null};
    default:
      return state;
  }
};
export default authReducer;
