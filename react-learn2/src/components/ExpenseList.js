import React from 'react';
import ExpenseItem from './ExpenseListItem'
import {connect } from 'react-redux';
import visibleExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        { props.expenses.map( expense => (
            <ExpenseItem key = {expense.id} {...expense}/>
        ))}
    </div>
);

const mapStateToProps = (state) => ({
    expenses : visibleExpenses(state.expenses,state.filters)
})
export default connect(mapStateToProps)(ExpenseList);
