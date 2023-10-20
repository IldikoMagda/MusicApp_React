import { combineReducers } from 'redux'
import likeReducer from './likeReducer'

const allReducers = combineReducers({
    0: likeReducer,
    1: likeReducer,
    2: likeReducer,
    3: likeReducer,
    4: likeReducer,
    5: likeReducer,
    6: likeReducer,
    7: likeReducer,
    8: likeReducer,
    9: likeReducer,
    10: likeReducer,
})

export default allReducers