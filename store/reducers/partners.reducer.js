import { PARTNERS } from "../../data/dummy-data";

const initialState = {
  partners: PARTNERS
};

const partnersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default partnersReducer;
