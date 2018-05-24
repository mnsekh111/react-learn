import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class ExpenseListFilters extends React.Component {
    onStartDateChange = (startDateMoment) => {
        this.props.setStartDate(startDateMoment.format('X'));
    };
    onEndDateChange = (endDateMoment) => {
        this.props.setEndDate(endDateMoment.format('X'));
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    };

    render() {
        return (
            <div className = "elf-container">
                Filters
                <input
                    type="text"
                    className="text-input"
                    placeholder="Search expenses"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />


                <select
                    className="select"
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DatePicker
                    selected={moment(this.props.filters.startDate,'X')}
                    selectsStart
                    startDate={moment(this.props.filters.startDate,'X')}
                    endDate={moment(this.props.filters.endDate,'X')}
                    onChange={this.onStartDateChange}
                />

                <DatePicker
                    selected={moment(this.props.filters.endDate,'X')}
                    selectsEnd
                    startDate={moment(this.props.filters.startDate,'X')}
                    endDate={moment(this.props.filters.endDate,'X')}
                    onChange={this.onEndDateChange}
                />

            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);