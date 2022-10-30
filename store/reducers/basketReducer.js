import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/actionTypes";

const initialState = {
    basketProducts: [],
    basketProductCount: [],
    totalCost: 0,
    totalDiscount: 0,
};

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                basketProducts: [...state.basketProducts, { product: action.data, count: action.count }],
            }
    }
    return state;
};
