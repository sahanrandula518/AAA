import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import item from './item';
import department from './department';
import event_type from './event_type';
import item_model from './item_model';
import item_type from './item_type';
import operating_system from './operating_system';
import vendor from './vendor';

///more reducers to come
export default combineReducers({
  user,
  form: formReducer
});

/*export default combineReducers({
  item,
  form: formReducer
}); 

export default combineReducers({
  department,
  form: formReducer
});

export default combineReducers({
  event_type,
  form: formReducer
});

export default combineReducers({
  item_model,
  form: formReducer
});

export default combineReducers({
  item_type,
  form: formReducer
});


export default combineReducers({
  operating_system,
  form: formReducer
});

export default combineReducers({
  vendor,
  form: formReducer
});
*/




