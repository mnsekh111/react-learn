import uuid from 'uuid';
import moment from 'moment';

const addExpense = (expense) => {
    expense.id= uuid();
    expense.createdAt = expense.createdAt || parseInt(moment().utc().format('X')); // Get unix time stamp
    return {
        type: 'ADD_EXPENSE',
        expense
    }
};

const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export {addExpense,removeExpense,editExpense}