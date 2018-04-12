
import moment from 'moment';

const defaultState = {
    text:'' ,
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

const filters = (prevState = defaultState, action) => {
    let newState = {}
    switch(action.type) {

        case 'SET_TEXT_FILTER' :
            newState = {
                ...prevState,
                text: action.text
            }
            break;
        case 'SORT_BY':
            newState = {
                ...prevState,
                sortBy: action.sortBy
            }
            break;
        case 'SET_START_DATE':
            newState = {
                ...prevState,
                startDate: action.startDate
            };
            break;
        case 'SET_END_DATE':
            newState = {
                ...prevState,
                endDate: action.endDate
            };
            break;
        default:
            newState = {
                ...prevState
            };
            break;

    }
    return newState;
}

export default filters;