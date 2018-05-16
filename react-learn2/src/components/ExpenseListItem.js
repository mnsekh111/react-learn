import React from 'react';
import moment from 'moment';
import {withRouter} from 'react-router-dom';

const ExpenseListItem = (props) => (
    <div className="eli-container">
        <div className="eli-description">
            Description : {props.description} <br/>
            Amount : { props.amount }  <br/>
            Created at : { moment.utc(props.createdAt,'X').format('YYYY/MM/DD')}
        </div>
        <div className="eli-edit">
            <input type="button" value="Remove" />
            <input type="button" value="Edit" onClick={(e) => {
                props.history.push(`/edit/${props.id}`)
            }} />
        </div>
    </div>
);

export default withRouter(ExpenseListItem);