import {createStore , combineReducers } from 'redux';
import expenses from '../reducers/expenses';
import filters from '../reducers/filters';

const configureStore = () => {
    const dataStore = createStore(combineReducers({
        expenses,
        filters
    }));
    return dataStore;
}

export default configureStore;

