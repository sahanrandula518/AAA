import { FETCH_VENDOR } from '../actions/types';

export default (state = [], action) => {

    switch (action.type) {

        case FETCH_VENDOR:
            return [...state, action.payload];
        default:
            return state;
    }
}