import "./styles.css";
import IncomeExpenseForm from "./IncomeExpenseForm.jsx";
import FinanceSummary from "./FinanceSummary.jsx";

export default function App() {
  return (
    <div className="app">
      <h1>⚛️ react playground!</h1>
      <IncomeExpenseForm />
      <FinanceSummary />
    </div>
  );
}
