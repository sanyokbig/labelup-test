import {createStore} from 'redux';
import rootReducer from './reducers.js'

export default function (initialState = {}) {
    return createStore(rootReducer);
}