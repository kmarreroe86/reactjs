import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = props => {


    /* If the entire component will change can use this type of conditional rendering */
  if(props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>
  }

  return <ul className="expenses-list">
    {props.filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>
};

export default ExpenseList;