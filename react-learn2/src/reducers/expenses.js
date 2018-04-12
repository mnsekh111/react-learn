const expenses = (prevState = [], action) => {

    let newState = []
    switch( action.type){
        case 'ADD_EXPENSE':
            newState = [...prevState,action.expense];
            break;
        case 'REMOVE_EXPENSE':
            newState = prevState.filter( (item ) => {
                return item.id !== action.id;
            })
            break;
        case 'EDIT_EXPENSE':
            newState = prevState.map( (item) => {
                if(item.id === action.id){
                    return {
                        ...item,
                        ...action.updates
                    }
                }else{
                    return item;
                }
            })
            break;
        default:
            newState = [].concat(prevState);
    }

    return newState;
}

export default expenses;