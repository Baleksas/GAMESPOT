import * as api from "../api";
// Action creators
export const getTops = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTops();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createTop = (top) => async (dispatch) => {
  try {
    const { data } = await api.createTop(top);

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
