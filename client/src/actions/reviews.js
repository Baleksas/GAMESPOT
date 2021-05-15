import * as api from "../api";
// Action creators
export const getReviews = () => async (dispatch) => {
  try {
    const { data } = await api.fetchReviews();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
