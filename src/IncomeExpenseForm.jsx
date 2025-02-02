import { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome, addExpense } from "./actions.js";

export default function IncomeExpenseForm() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handleAddIncome = () => {
    dispatch(addIncome(parseFloat(amount)));
    setAmount(0);
  };

  const handleAddExpense = () => {
    dispatch(addExpense(parseFloat(amount)));
    setAmount(0);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Enter income or expenses"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddIncome}>Add Income</button>
      <button onClick={handleAddExpense}>Add Expense</button>
    </>
  );
}
