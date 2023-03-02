import ExpenseStatistics from "../../components/expenses/ExpenseStatistics";
import Chart from "../../components/expenses/Chart";

export const DUMMY = [
  {
    id: "1",
    title: "Ffds",
    amount: 1561,
    date: new Date().toISOString(),
  },
];

const ExpensesAnalysisPage = () => {
  return (
    <main>
      <Chart expenses={DUMMY} />
      <ExpenseStatistics expenses={DUMMY} />
    </main>
  );
};

export default ExpensesAnalysisPage;
