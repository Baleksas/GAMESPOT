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
export const createReview = (review) => async (dispatch) => {
  try {
    const { data } = await api.createReview(review);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateTop = (id, top) => async (dispatch) => {
  try {
    const { data } = await api.updateTop(id, top);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
