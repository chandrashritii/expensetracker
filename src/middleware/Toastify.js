import { CreateAction } from '../app/Reducer';
import { toast } from 'react-toastify';

const ToastMiddleWare = () => next => action => {
  switch (action.type) {
    case CreateAction.newExpense.type:
      toast.success('New Expense added!');
      break;
    case CreateAction.editExpense.type:
      toast.success('Expense record edited!');
      break;
    case CreateAction.deleteExpense.type:
      toast.success('Expense record deleted!');
      break;
    case CreateAction.setExpensesError.type:
      toast.success('Facing an error loading expenses!');
      break;
    case CreateAction.newExpenseError.type:
      toast.success('Facing an error in adding new expense!');
      break;
    case CreateAction.editExpenseError.type:
      toast.success('Facing an error in editing expense!');
      break;
    case CreateAction.deleteExpenseError.type:
      toast.success('Facing an error in deleting expense!');
      break;
    default:
      break;
  }
  return next(action);
};

export default ToastMiddleWare;
