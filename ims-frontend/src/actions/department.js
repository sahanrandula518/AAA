import api from '../apis/api';
import {FETCH_DEPARTMENT} from './types';

export const fetchDepartment = () =>async(dispatch)=>{
try {
    const response = await api.get(`/api/department`);
    dispatch({type: FETCH_DEPARTMENT, payload: response.data});
} catch (err) {
    console.log(err.message);
}


}
