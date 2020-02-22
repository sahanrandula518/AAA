import { FETCH_DEPARTMENT } from '../actions/types';

export default (state = [], action) => {

    switch (action.type) {

        case FETCH_DEPARTMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}