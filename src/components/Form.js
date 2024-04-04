import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewExpense } from '../services/expensesBase';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default ({ expense, setIsEditing }) => {
    const descriptions = ['Groceries', 'Rent', 'credit card', 'Loans', 'Eating out', 'Travel'];
    const [amount, setAmount] = useState();
    const [description, setDescription] = useState(descriptions[0]);
    const [isNewExpense, setIsNewExpense] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (expense !== undefined) {
            setIsNewExpense(false);
            setAmount(expense.amount);
        }
        else {
            setIsNewExpense(true);
        }
    }, [expense]);

    return <Form
        onSubmit={event => {
            event.preventDefault();
            if (isNewExpense) {
                NewExpense(dispatch, { description: description, amount: amount });
            }
            else {
                setIsEditing(false);
            }
        }}>
        <Row>
            <Col>
                <Form.Label>Description</Form.Label>
                <Form.Control as='select'
                    onChange={event => setDescription(event.target.value)}>
                    {descriptions.map(d => <option>{d}</option>)}
                </Form.Control>
            </Col>
            <Col>
                <Form.Label>Amount</Form.Label>
                <Form.Control
                    type='number'
                    placeholder={amount}
                    onChange={event => setAmount(event.target.value)}
                ></Form.Control>
            </Col>
                {/* Edit expenses form */}
                <div style={{ marginTop: 'auto' }}>
                    {isNewExpense
                        ? <Button variant='primary' type='submit'> Add  </Button>
                        : <div>
                            <Button variant='danger'> style={{margin : '1px'}} Delete </Button>
                            <Button variant='success' style={{margin : '1px'}} type='submit'> Save </Button>
                            <Button variant='default' style={{margin : '1px'}} onClick={() => setIsEditing(false)}> Cancel </Button>
                        </div>
                    }
                </div>
        </Row>
    </Form>
}