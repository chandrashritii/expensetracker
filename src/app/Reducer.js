import { React, useEffect } from 'react';

const initial = {
    expenses: []
}

export const Actions = {
    SET_EXPENSES: 'SET_EXPENSES',
    NEW_EXPENSE: 'NEW_EXPENSE',
}

export const CreateAction = {
    setExpenses: payload => ({ type: Actions.SET_EXPENSES, payload }),
    newExpense: payload => ({ type: Actions.NEW_EXPENSE, payload }),
}

export default (state = initial, action) => {
    switch (action.type) {
        case Actions.SET_EXPENSES:
            //overwrite state with payload
            return { ...state, expenses: [...action.payload] };
        case Actions.NEW_EXPENSE:
            return { ...state, expenses: [action.payload, ...state.expenses] };
            return state;
    }
}