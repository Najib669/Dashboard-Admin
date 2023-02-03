import { ADD_EVENT, GET_EVENT, ADD, GET_EVENTS, UPDATE_EVENT } from "./Types";
import { useDispatch } from "react-redux";
import axios from "axios";


export const addEvent = (newevent) => (dispatch) => {
    axios
      .post("http://localhost:8080/events/newevent", newevent)
      .then(({ data }) =>
        dispatch({
          type: ADD,
          payload: data,
        })
      )
      .catch((err) => alert("ERROR IN ADD NEW USER"));
  };



export const getEvents = () => (dispatch) => {
  axios.get("http://localhost:8080/events/").then(
    ({ data }) =>
      dispatch({
        type: GET_EVENTS,
        payload: data,
      })
    //.catch((err)=>{alert("ERROR IN GET USERS")})
  );
};
// get event by id
export const getEvent = (id) => (dispatch) => {
  axios.get(`http://localhost:8080/events/${id}`).then(({ data }) =>
    dispatch({
      type: GET_EVENT,
      payload: data,
    })
  );
};

// Update Events
export const editEventById = (id, editEvent) => (dispatch) => {
  axios
    .put(`http://localhost:8080/updateUser/${id}`, editEvent)
    .then((re) => dispatch(getEvent(id)));
};

// Delete Event By Id

export const deleteEvent = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/events/${id}`);
  dispatch({
    type: "DELETE",
  });

  dispatch(getEvents());
};

//* Edit Events

export const updateEvent = (id,user) => async(dispatch) => {
  try {
      const res = await axios.put(`http://localhost:8080/events/${id}`, user);
      dispatch(
          {
              type : UPDATE_EVENT,
              payload : res.data
          }
      )
  } catch (error) {
      console.log("error",error)
  }
};
