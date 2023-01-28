import axios from "axios";

const url = "https://gamespot-376120.nw.r.appspot.com/reviews";
const url_top = "https://gamespot-376120.nw.r.appspot.com/top";

export const fetchReviews = () => axios.get(url);

export const createReview = (newReview) => axios.post(url, newReview);

export const fetchTops = () => axios.get(url_top);

export const createTop = (newTop) => axios.post(url_top, newTop);

export const updateTop = (id, updatedTop) =>
  axios.patch(`${url_top}/${id}`, updatedTop);

export const deleteTop = (id) => axios.delete(`${url_top}/${id}`);
