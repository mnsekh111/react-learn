import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
            amount: this.props.amount,
            createdAt: moment(this.props.createdAt,'X'),
            error: ''
        };

        this.onDateChange = this.onDateChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Amount and description are required'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt
            })
        }
    }

    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(() => ({description}));
    }

    onAmountChange(e) {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    }

    onDateChange(createdAt) {
        this.setState(() => ({createdAt }));
    }

    render() {
        return (
            <div className="ef-container">
                <form onSubmit={this.onSubmit}>
                    <div className="left">
                        <div className="form-item">
                            <label> Description</label>
                            <input
                                type="text"
                                placeholder="Description"
                                autoFocus
                                value={this.state.description}
                                onChange={this.onDescriptionChange}
                            />
                        </div>
                        <div className="form-item">
                            <label> Amount</label>
                            <input
                                type="text"
                                placeholder="Amount"
                                className="text-input"
                                value={this.state.amount}
                                onChange={this.onAmountChange}
                            />
                        </div>
                        <div className="form-item">
                            <label> Date</label>
                            <DatePicker
                                selected={this.state.createdAt}
                                onChange={this.onDateChange}
                                dateFormat="YYYY/MM/DD"
                            />
                        </div>
                    </div>
                    <div className="right">
                        <input type="submit" value="Save expense"></input>
                    </div>
                </form>
            </div>
        )
    }
}

ExpenseForm.defaultProps = {
    description: '',
    amount: '',
    createdAt: parseInt(moment().utc().format('X')),
    onSubmit: () => {
        console.log("onSubmit must be passed as a prop");
    }
}

export default ExpenseForm;