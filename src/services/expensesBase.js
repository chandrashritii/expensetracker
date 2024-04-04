import {CreateAction} from '../app/Reducer';

export const GetExpenses = async (dispatch) => {
    //Trigger a state change
    try {
        const expenses = [
            { id: 1, description: "Rent", amount: 1000 },
            { id: 2, description: "Insurance", amount: 200 },
            { id: 3, description: "Gas", amount: 50 },
        ];

        dispatch(CreateAction.setExpenses(expenses));
    }
    catch {
        console.log("Error");
    }
}

export const NewExpense = async (dispatch, expense) => {
    try {
        dispatch(CreateAction.newExpense({id : 10, description: expense.description, amount: expense.amount}));
    }
    catch {
        console.log("Error");
    }
}
