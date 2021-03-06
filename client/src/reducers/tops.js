export default (tops = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...tops, action.payload];
    case "UPDATE":
      return tops.map((top) =>
        top._id === action.payload._id ? action.payload : top
      );
    case "DELETE":
      return tops.filter((top) => top._id !== action.payload);
    default:
      return tops;
  }
};
