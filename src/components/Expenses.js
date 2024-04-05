import {React, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetExpenses } from '../services/expensesBase';
import { Row, Col, Button } from 'react-bootstrap';
import {CreateAction} from '../app/Reducer';
import Form from './Form';

export default () => {
    //Pass on the dispatch to services
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.Reducer.expenses);
    useEffect(() => {
        GetExpenses(dispatch);
    }, []);

    return expenses.map(e => 
        <div key={e.id} style={{ marginBottom: '1rem'}}>  
            <TableExpenses expense={e} />
        </div>
    )
}

const TableExpenses  = ({ expense }) => {
    const [isEditing, setIsEditing] = useState(false);
    return isEditing
    ? <Form expense={expense} setIsEditing={setIsEditing} />
    : <div>
        <Row>
            <Col>{expense.description}</Col>
            <Col>{expense.amount}</Col>
            <Col><Button variant="warning" onClick={() => setIsEditing(!isEditing)}>Edit</Button></Col>
        </Row>
        <hr />
    </div>
}
