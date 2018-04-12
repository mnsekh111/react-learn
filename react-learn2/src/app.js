console.log("This is new app");
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import './styles/styles.scss';
import configureStore from './store/configureStore'
import {addExpense,removeExpense,editExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
let dataStore = configureStore();

dataStore.subscribe( () => {
    console.log(dataStore.getState());
})

dataStore.dispatch(addExpense({
    amount : 10,
    description: 'pizza',
}));

dataStore.dispatch(setTextFilter('Hooks'));
let newE = addExpense({
    amount : 5,
    description: 'Hooks'
});

dataStore.dispatch(addExpense(newE));
dataStore.dispatch(removeExpense(newE.id))


ReactDOM.render(<AppRouter/>, document.getElementById('app'));