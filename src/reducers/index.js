import { combineReducers } from 'redux';
import detail from './detail';
import comments from './comments';

const rootReducer = combineReducers({
    detail,
    comments
});

export default rootReducer;