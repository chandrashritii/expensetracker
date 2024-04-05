import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditExpense, NewExpense, DeleteExpense } from '../services/expensesBase';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default ({ expense, setIsEditing }) => {
    const descriptions = ['Groceries', 'Rent', 'Credit card', 'Loans', 'Eating out', 'Travel', 'Miscellaneous'];
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

    return (
    <Form
        style={{ padding: '1rem', margin: '20px', marginLeft: '80px' }}
        onSubmit={event => {
            event.preventDefault();
            if (isNewExpense) {
                NewExpense(dispatch, { description: description, amount: Number(amount) });
            }
            else {
                EditExpense(dispatch, { id: expense.id, description: description, amount: Number(amount) });
                setIsEditing(false);
            }
        }}>
        <Row>
            <Col style={{}}>
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
            <Col>
                {/* Edit expenses form */}
                <div style={{ marginTop: '2rem' }}>
                    {isNewExpense
                        ? <Button variant='primary' type='submit'> Add  </Button>  
                    
                        : <div>
                            <Button variant='danger' style={{ margin: '2px' }} onClick={() => DeleteExpense(dispatch, expense)}> Delete </Button>
                            <Button variant='success' style={{ margin: '2px' }} type='submit'> Save </Button>
                            <Button variant='default' style={{ margin: '2px', border: '1px solid black' }} onClick={() => setIsEditing(false)}> Cancel </Button>
                        </div>
                    }
                </div>
            </Col>
        </Row>
    </Form>
    )
}