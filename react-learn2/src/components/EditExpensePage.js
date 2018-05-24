import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {editExpense,removeExpense} from "../actions/expenses";

const EditExpensePage = (props) => {
    return(
        <div>
            {
                props.expense ? (
                    <div>
                        <ExpenseForm {...props.expense}
                                 onSubmit={(expense)=>{props.dispatch(editExpense(props.expense.id,expense));props.history.push('/');}}/>
                        <input type="button" value="Remove" onClick={(e) => {
                            props.dispatch(removeExpense(props.expense.id));
                            props.history.push('/');
                        }}/>
                    </div>
                    )
                : "Not a valid expense"}
        </div>
    );
};

const mapStatetoProps = (state,props) => {
    return {
        expense : state.expenses.filter((item) => props.match.params.id === item.id)[0]
    }
};

export default connect(mapStatetoProps)(EditExpensePage);