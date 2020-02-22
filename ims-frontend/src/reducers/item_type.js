import { FETCH_ITEM_TYPE } from '../actions/types';

export default (state = [], action) => {

    switch (action.type) {

        case FETCH_ITEM_TYPE:
            return [...state, action.payload];
        default:
            return state;
    }
}