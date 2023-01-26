import {combineReducers} from"redux"
import todoReducer from './Todo/reducer'
import filterReducer from './Filter/reducer'


const rootReducer=combineReducers({
    todo:todoReducer,
    filter:filterReducer
})
export default rootReducer