export default (tops = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...tops, action.payload];
    default:
      return tops;
  }
};
