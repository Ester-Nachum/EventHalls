import {createStore} from 'redux'
import {hallsReducer} from './reducers/hallsReducer'

let store = createStore(hallsReducer)
window.store=store;
export default store;
