using ExpensesAPI.Services;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Add Db context
builder.Services.AddDbContext<ExpenseDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("ExpenseDB")));

builder.Services.AddTransient<IExpenseService, ExpenseService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("ExpensesCORSPolicy",
               builder =>
               {
                   builder.WithOrigins("*")
                       .AllowAnyHeader()
                       .AllowAnyMethod();
               });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseCors("ExpensesCORSPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
