
import { NAME_AURA } from './types';

const initialState = {
  // The item below should be what the key values name and
  // aura color from the radio button are put into.
  nameAuraItems: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NAME_AURA:
      return {
        ...state,
        nameAuraItems: action.payload,
      };
    default:
      return state;
  }
};
