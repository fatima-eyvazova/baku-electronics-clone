import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/actionTypes";

const initialState = {
    basketProducts: [],
};

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                basketProducts: action.data,
            };
        case REMOVE_FROM_BASKET:
            return {
                ...state,
                basketProducts: action.data,
            }
    }
    return state;
};
