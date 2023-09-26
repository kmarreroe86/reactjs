import React, { useState } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.expenses.filter(
    (exp) => exp.date.getFullYear().toString() === filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("from Expenses: ", selectedYear);
  };


  
  {
    /******* Conditional rendering content 3 *******/
    /* let expensesContent = <p className="no-expenses">No expenses for year {filteredYear}</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  } */
  }
  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />

        <ExpensesChart expenses={filteredExpenses} />

        <ExpenseList
          filteredExpenses={filteredExpenses}
          filteredYear={filteredYear}
        />

        {/******* Conditional rendering content 3 *******/}
        {/* {expensesContent} */}



        {/******* Conditional rendering content 1 ******/}
        {/* {filteredExpenses.length === 0 && (
          <p className="no-expenses">No expenses for year {filteredYear}</p>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
          


        {/******* Conditional rendering content 2 *******/}
        {/* {filteredExpenses.length === 0 ? (
          <p className="no-expenses">No expenses for year {filteredYear}</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
}

export default Expenses;
