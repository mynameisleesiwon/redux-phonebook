const initialState = {
  contact: [],
  keyword: "",
};
const contactReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [
          ...state.contacts,
          { name: payload.name, phoneNumber: payload.phoneNumber },
        ],
      };
    case "SEARCH_BY_USERNAME":
      return { ...state, keyword: payload.keyword };
    default:
      return state;
  }
};

export default contactReducer;
