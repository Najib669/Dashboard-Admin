import { ADD_NEWS, GET_NEWS, GET_NEWSS, UPDATE_NEWS } from "./Types";
import { useDispatch } from "react-redux";
import axios from "axios";

export const addNews = (newnews) => (dispatch) => {
  axios
    .post("http://localhost:8080/news/newnews", newnews)
    .then(({ data }) =>
      dispatch({
        type: ADD_NEWS,
        payload: data,
      })
    )
    .catch((err) => alert("ERROR IN ADD NEW NEWS"));
};

export const getNews = () => (dispatch) => {
  axios.get("http://localhost:8080/news/").then(
    ({ data }) =>
      dispatch({
        type: GET_NEWS,
        payload: data,
      })
    //.catch((err)=>{alert("ERROR IN GET USERS")})
  );
};
// get news by id
export const getNewss = (id) => (dispatch) => {
  axios.get(`http://localhost:8080/news/${id}`).then(({ data }) =>
    dispatch({
      type: GET_NEWSS,
      payload: data,
    })
  );
};
// update news by id
export const editNewsById = (id, editNews) => (dispatch) => {
  axios
    .put(`http://localhost:8080/updateUser/${id}`, editNews)
    .then((re) => dispatch(getNews(id)));
};

// Delete News By Id 
export const deleteNews = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/news/${id}`);
  dispatch({
    type: "DELETE",
  });

  dispatch(getNews());
};

//* Edit News

export const updateNews = (id,user) => async(dispatch) => {
  try {
      const res = await axios.put(`http://localhost:8080/news/${id}`, user);
      dispatch(
          {
              type : UPDATE_NEWS,
              payload : res.data
          }
      )
  } catch (error) {
      console.log("error",error)
  }
};
