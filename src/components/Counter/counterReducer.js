const counterReducer = (state = { count: 0 }, action) => {
   switch (action.type) {
      case "counter/incremented":
         return { count: state.count + 1 };
      case "counter/decremented":
         return { count: state.count - 1 };
      default:
         return state;
   }
};

export default counterReducer;
