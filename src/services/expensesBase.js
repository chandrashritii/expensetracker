import { CreateAction } from '../app/Reducer';
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://expensetrackapp.azurewebsites.net'
});

export const GetExpenses = async (dispatch) => {
    //Trigger a state change
    try {
       const {data} = await axiosInstance.get();

        dispatch(CreateAction.setExpenses(data));
    }
    catch {
        console.log("Error");
    }
}

export const NewExpense = async (dispatch, expense) => {
    try {
        const {data} = await axiosInstance.post(' ', expense);

        dispatch(CreateAction.newExpense({data}));
    }
    catch  {
        console.log("Error");
    }
}

export const EditExpense = async (dispatch, expense) => {
    try {

        const {data} = await axiosInstance.put(' ', expense);

        dispatch(CreateAction.editExpense(expense));
    }
    catch {
        console.log("Error");
    }
}

export const DeleteExpense = async (dispatch, expense) => {
    try {
        const {data} = await axiosInstance.delete(' ', { data : {...expense}});

        dispatch(CreateAction.deleteExpense(expense));
    }
    catch {
        console.log("Error");
    }
}
