import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpense(expenseData); // call the function defined in the parent component
    setShowExpenseForm(false);
  };

  const cancelFormHandler = () => {
    setShowExpenseForm(false);
  };

  
  let expenseFormContent = <button onClick={() => setShowExpenseForm(true)}>Add Expense</button>;

  if (showExpenseForm) {
    expenseFormContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelFormClick={cancelFormHandler}/>;
  }

  return (
    <div className="new-expense">
      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
      {expenseFormContent}
    </div>
  );
};

export default NewExpense;
