import { useSelector } from "react-redux";

export default function FinanceSummary() {
  const income = useSelector((state) => state.income);
  const expenses = useSelector((state) => state.expenses);

  return (
    <>
      <h1>Finance Summary</h1>
      <p>Income: {income}</p>
      <p>Expenses: {expenses}</p>
      <p>Balanace: {income - expenses}</p>
    </>
  );
}
