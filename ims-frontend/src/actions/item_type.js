import api from '../apis/api';
import {FETCH_ITEM_TYPE} from './types';

export const fetchitem_type = () =>async(dispatch)=>{
try {
    const response = await api.get(`/api/item_type`);
    dispatch({type: FETCH_ITEM_TYPE, payload: response.data});
} catch (err) {
    console.log(err.message);
}


}
