import api from '../apis/api';
import {FETCH_ITEM_MODEL} from './types';

export const fetchitem_model = () =>async(dispatch)=>{
try {
    const response = await api.get(`/api/item_model`);
    dispatch({type: FETCH_ITEM_MODEL, payload: response.data});
} catch (err) {
    console.log(err.message);
}


}

