console.log("This is new app");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import './styles/styles.scss';
import configureStore from './store/configureStore'
import {addExpense,removeExpense,editExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import visibleExpenses from './selectors/expenses'

let dataStore = configureStore();


dataStore.subscribe( () => {
    console.log(dataStore.getState());
})

dataStore.dispatch(addExpense({
    amount : 10,
    description: 'pizza',
}));
// let newE = addExpense({
//     amount : 5,
//     description: 'Hooks'
// });
//
// dataStore.dispatch(newE);
// dataStore.dispatch(setTextFilter('Hooks'));
// console.log(visibleExpenses(dataStore.getState().expenses, dataStore.getState().filters));
// dataStore.dispatch(setTextFilter('asdfasdf'));
// console.log(visibleExpenses(dataStore.getState().expenses, dataStore.getState().filters));
// dataStore.dispatch(setTextFilter(''));
// console.log(visibleExpenses(dataStore.getState().expenses, dataStore.getState().filters));
// dataStore.dispatch(removeExpense(newE.expense.id))


const jsx = (
    <Provider store={dataStore}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));

// //************// Playground
//
// import {PropTypes} from 'prop-types';
//
// const MyCompContext = React.createContext();
// class MyComp extends React.Component {
//
//     render(){
//         const sharedContext = {
//             color: "red"
//         };
//
//         const items = ["Button 1" ,"Button 2", "Button 3"];
//         return (
//             <MyCompContext.Provider value={sharedContext}>
//                 <MyButtonList list={items}></MyButtonList>
//             </MyCompContext.Provider>
//         );
//     }
// }
//
// class MyButtonList extends React.Component {
//     render () {
//         const children = this.props.list.map((item, index) => (<MyButton key={index} value={item}></MyButton>));
//         console.log(children)
//         return (
//             <div>
//                 {children}
//             </div>
//         );
//     }
// }
//
// class MyButton extends React.Component {
//     render () {
//         return (
//             <MyCompContext.Consumer>
//             {
//                 context => (
//                     <button style={{background: context.color}}>{this.props.value}</button>
//                 )
//             }
//             </MyCompContext.Consumer>
//         )
//     }
// }
//
// ReactDOM.render(<MyComp/>, document.getElementById('app'));


