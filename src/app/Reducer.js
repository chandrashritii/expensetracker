import { React, useEffect } from 'react';

const initial = {
    expenses: []
}

export const Actions = {
    SET_EXPENSES: 'SET_EXPENSES',
    NEW_EXPENSE: 'NEW_EXPENSE',
    DELETE_EXPENSE: 'DELETE_EXPENSE',
    EDIT_EXPENSE: 'EDIT_EXPENSE',
    SET_EXPENSES_ERROR: 'SET_EXPENSES_ERROR',
    NEW_EXPENSES_ERROR: 'NEW_EXPENSES_ERROR',
    EDIT_EXPENSES_ERROR: 'EDIT_EXPENSES_ERROR',
    DELETE_EXPENSES_ERROR: 'DELETE_EXPENSES_ERROR'
}

export const CreateAction = {
    setExpenses: payload => ({ type: Actions.SET_EXPENSES, payload }),
    newExpense: payload => ({ type: Actions.NEW_EXPENSE, payload }),
    deleteExpense: payload => ({ type: Actions.DELETE_EXPENSE, payload }),
    editExpense: payload => ({ type: Actions.EDIT_EXPENSE, payload }),
    setExpensesError: payload => ({ type: Actions.SET_EXPENSES_ERROR, payload }),
    newExpenseError: payload => ({ type: Actions.NEW_EXPENSES_ERROR, payload }),
    editExpenseError: payload => ({ type: Actions.EDIT_EXPENSES_ERROR, payload }),
    deleteExpenseError: payload => ({ type: Actions.DELETE_EXPENSES_ERROR, payload })
}

export default (state = initial, action) => {
    switch (action.type) {
        case Actions.SET_EXPENSES:
            //overwrite state with payload
            return { ...state, expenses: [...action.payload] };
        case Actions.NEW_EXPENSE:
            return { ...state, expenses: [action.payload, ...state.expenses] };
        case Actions.EDIT_EXPENSE:
            return { ...state, expenses: state.expenses.map(e => e.id === action.payload.id ? action.payload : e) };
        case Actions.DELETE_EXPENSE:
            return { ...state, expenses: state.expenses.filter(e => e.id !== action.payload.id) };
        default:
            return state;
    }
}