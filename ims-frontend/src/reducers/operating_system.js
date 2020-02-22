import { FETCH_OPERATING_SYSTEM } from '../actions/types';

export default (state = [], action) => {

    switch (action.type) {

        case FETCH_OPERATING_SYSTEM:
            return [...state, action.payload];
        default:
            return state;
    }
}