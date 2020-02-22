import { FETCH_ITEM_MODEL } from '../actions/types';

export default (state = [], action) => {

    switch (action.type) {

        case FETCH_ITEM_MODEL:
            return [...state, action.payload];
        default:
            return state;
    }
}