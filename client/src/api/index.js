import axios from "axios";

const url = "http://localhost:5000/reviews";
const url_top = "http://localhost:5000/top";

export const fetchReviews = () => axios.get(url);

export const createReview = (newReview) => axios.post(url, newReview);

export const fetchTops = () => axios.get(url_top);

export const createTop = (newTop) => axios.post(url_top, newTop);
