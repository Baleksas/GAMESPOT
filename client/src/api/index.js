import axios from "axios";

const url = "http://localhost:5000/reviews";

export const fetchReviews = () => axios.get(url);
