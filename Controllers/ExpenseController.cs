using ExpensesAPI.Models;
using ExpensesAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ExpensesAPI.Controllers
{
    [Authorize]
    //With the Authorize attribute, Only authenticated users can access this controller
    [ApiController]
    [Route("[controller]")]
    public class ExpenseController : ControllerBase
    {
        private IExpenseService _expenseService;
        public ExpenseController(IExpenseService expenseService)
        {
            _expenseService = expenseService;
        }


        [HttpGet]
        public IActionResult GetExpenses()
        {
            return Ok(_expenseService.GetExpenses());

        }

        [HttpGet("{id}", Name = "GetExpense")]
        public IActionResult GetExpense(int id)
        {
            return Ok(_expenseService.GetExpense(id));
        }

        [HttpDelete]
        public IActionResult DeleteExpense(Expense expense)
        {
            _expenseService.DeleteExpense(expense);
            return Ok();
        }


        [HttpPut]
        public IActionResult EditExpense(Expense expense)
        {
            return Ok(_expenseService.EditExpense(expense));
        }

        [HttpPost]
        public IActionResult AddExpense(Expense expense)
        {
            var newExpense = _expenseService.AddExpense(expense);
            //Returning a 201 status code with CreatedAtRoute method
            return CreatedAtRoute("GetExpense", new { newExpense.Id }, newExpense);
        }
    }
}