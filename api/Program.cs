using mis321pa3.api.database;
using mis321pa3.api.models;
using mis321pa3.api.interfaces;
using System;

DeleteDriver.DropDriverTable();
SaveDriver.CreateDriverTable();

Driver myDriver = new Driver(){DriverName="Nick Saban"};

myDriver.Save.CreateDriver(myDriver);
//myDriver.Deleted.DeleteDriver(3);
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
