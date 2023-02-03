
import {GET_DONATIONS, GET_DONATION } from './Types'

import axios from "axios"



export const getDonations = () => (dispatch) => {
    axios.get("http://localhost:8080/donations/").then(
      ({ data }) =>
        dispatch({
          type:GET_DONATIONS,
          payload: data,
        })
      //.catch((err)=>{alert("ERROR IN GET USERS")})
    );
  };
  
  //get one Donation

    export const getDonation = (id) => (dispatch) => {
      axios.get(`http://localhost:8080/donations/${id}`).then(({ data }) =>
        dispatch({
          type: GET_DONATION,
          payload: data,
        })
        // .catch((err) => {
        //   alert("ERROR IN GET USERS");
        // })
      );
    };