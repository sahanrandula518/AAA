import api from '../apis/api';
import {FETCH_EVENTTYPE} from './types';

export const fetchEventType = () =>async(dispatch)=>{
try {
    const response = await api.get(`/api/event_type`);
    dispatch({type: FETCH_EVENTTYPE, payload: response.data});
} catch (err) {
    console.log(err.message);
}


}