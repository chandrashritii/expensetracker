using ExpensesAPI.Models;

namespace ExpensesAPI.Services
{
    public class ExpenseService : IExpenseService
    {
        private ExpenseDbContext _context;

        public ExpenseService(ExpenseDbContext context)
        {
            _context = context;
        }

        public List<Expense> GetExpenses()
        {
            return _context.Expense.ToList();
        }
        public Expense GetExpense(int id)
        {
            return _context.Expense.First(e => e.Id == id);
        }

        public void DeleteExpense(Expense expense)
        {
            _context.Remove(expense);
            _context.SaveChanges();
        }

        public Expense EditExpense(Expense expense)
        {
            var editExpense = _context.Expense
                 .Where(e => e.Id == expense.Id)
                 .First();

            editExpense.Description = expense.Description;
            editExpense.Amount = expense.Amount;
            _context.SaveChanges();

            return expense;
        }

        public Expense AddExpense(Expense expense)
        {
            _context.Add(expense);
            _context.SaveChanges();
            return expense;
        }
    }
}
