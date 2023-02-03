import {createStore, applyMiddleware,compose} from 'redux'
import routeReducer from './Reducers'
import thunk from 'redux-thunk'

const store= createStore(routeReducer,compose(applyMiddleware(thunk) ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
export default store