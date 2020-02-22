import api from '../apis/api';
import {FETCH_OPERATING_SYSTEM} from './types';

export const fetchoperating_system = () =>async(dispatch)=>{
try {
    const response = await api.get(`/api/operating_system`);
    dispatch({type: FETCH_OPERATING_SYSTEM, payload: response.data});
} catch (err) {
    console.log(err.message);
}


}
