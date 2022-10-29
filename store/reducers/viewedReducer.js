import { ADD_TO_VIEWED } from "../actions/actionTypes";

const initialState = {
    viewedProducts: [],
};

export const viewedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_VIEWED:
            return {
                ...state,
                viewedProducts: [...state.viewedProducts, action.data],
            };
    }
    return state;
};
