import { combineReducers } from "redux";
import reviews from "./reviews";
import tops from "./tops";
export default combineReducers({ reviews: reviews, tops: tops });
