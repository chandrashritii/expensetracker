using ExpensesAPI.Models;

namespace ExpensesAPI.Services
{
    public interface IExpenseService
    {
        List<Expense> GetExpenses();

        Expense GetExpense(int id);

        void DeleteExpense(Expense expense);

        Expense EditExpense(Expense expense);

        Expense AddExpense(Expense expense);

    }
}
