import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

/*** Can use 
  props object or use object deconstruction
  {title, amount, date} ***/
function ExpenseItem(/*props*/ { title, amount, date }) {
  // const [titleState, setTitle] = useState(title); // useState(props.title)

  // function clickHandler() {
  // console.log('clickHandler update name');
  // setTitle(titleState + " Updated");
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
          {/* <button onClick={clickHandler}>Update Title</button> */}
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
