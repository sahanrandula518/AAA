import api from '../apis/api';
import {FETCH_ITEM} from './types';

export const fetchitem = () =>async(dispatch)=>{
try {
    const response = await api.get(`/api/item`);
    dispatch({type: FETCH_ITEM, payload: response.data});
} catch (err) {
    console.log(err.message);
}


}
