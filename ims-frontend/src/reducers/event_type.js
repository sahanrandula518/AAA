import { FETCH_EVENTTYPE } from '../actions/types';

export default (state = [], action) => {

    switch (action.type) {

        case FETCH_EVENTTYPE:
            return [...state, action.payload];
        default:
            return state;
    }
}