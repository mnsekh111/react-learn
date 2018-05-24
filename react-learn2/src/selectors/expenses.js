// Get visible expenses

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const textMatch = expense.description.toLowerCase()
            .includes(text.toLowerCase())
        return textMatch;
    }).filter(expense => expense.createdAt >= startDate && expense.createdAt <= endDate)
        .sort((a, b) => {
            if (sortBy === 'date') {
                return a.createdAt < b.createdAt ? 1 : -1;
            } else if (sortBy === 'amount') {
                return a.amount < b.amount ? 1 : -1;
            }
        });
};
