import api from '../apis/api';
import {FETCH_VENDOR} from './types';

export const fetchVendor = () =>async(dispatch)=>{
try {
    const response = await api.get(`/api/vendor`);
    dispatch({type: FETCH_VENDOR, payload: response.data});
} catch (err) {
    console.log(err.message);
}


}