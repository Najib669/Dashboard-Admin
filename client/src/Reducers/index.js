import { combineReducers} from 'redux'
import userReducer from './userReducer'
import eventReducer from './eventReducer'
import productReducer from './productReducer'
import newsReducer from './newsReducer'
import authReducer from './authReducer'
import mailReducer from './mailReducer'
import donationReducer from './donationReducer'
import orderReducer from './orderReducer'

export default combineReducers({userReducer,productReducer,eventReducer,newsReducer,authReducer,mailReducer,donationReducer ,orderReducer})