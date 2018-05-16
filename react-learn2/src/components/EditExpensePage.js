import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {editExpense} from "../actions/expenses";

const EditExpensePage = (props) => {
    return(
        <div>
            {props.expense ? <ExpenseForm {...props.expense} onSubmit={(expense)=>{
                props.dispatch(editExpense(props.expense.id,expense));
                props.history.push('/');
            }}/> : "Not a valid expense"}
        </div>
    );
};

const mapStatetoProps = (state,props) => {
    return {
        expense : state.expenses.filter((item) => props.match.params.id === item.id)[0]
    }
};

export default connect(mapStatetoProps)(EditExpensePage);