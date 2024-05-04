using ExpensesAPI.Models;
using Microsoft.EntityFrameworkCore;

public class ExpenseDbContext : DbContext
{
    public ExpenseDbContext(DbContextOptions<ExpenseDbContext> options) : base(options)
    {
    }

    public DbSet<Expense> Expense { get; set; }
}

