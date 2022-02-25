import {combineReducers} from 'redux'
import counterReducter from './counterReducter'
// import menuReducer from './menuReducer'

const rootReducer = combineReducers({
    counter: counterReducter,
    // menuReducer
})

export default rootReducer