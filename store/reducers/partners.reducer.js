import { PARTNERS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/partners.action";

const initialState = {
  partners: PARTNERS,
  filteredPartners: PARTNERS,
  favoritePartners: []
};

const partnersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoritePartners.findIndex(
        partner => partner.id === action.partnerId
      );
      if (existingIndex >= 0) {
        const updatedFavPartns = [...state.favoritePartners];
        updatedFavPartns.splice(existingIndex, 1);
        return { ...state, favoritePartners: updatedFavPartns };
      } else {
        const partner = state.partners.find(
          partner => partner.id === action.partnerId
        );
        return {
          ...state,
          favoritePartners: state.favoritePartners.concat(partner)
        };
      }
    default:
      return state;
  }
};

export default partnersReducer;
