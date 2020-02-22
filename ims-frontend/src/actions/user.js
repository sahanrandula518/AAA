import api from '../apis/api';
import {FETCH_USER} from './types';

export const fetchUser = () =>async(dispatch)=>{
try {
    const response = await api.get(`/api/user`);
    dispatch({type: FETCH_USER, payload: response.data});
} catch (err) {
    console.log(err.message);
}


}