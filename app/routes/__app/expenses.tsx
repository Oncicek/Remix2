import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import expensesStyles from "../../styles/expenses.css";
import ExpensesList from "../../components/expenses/ExpensesList";
import { DUMMY } from "./expenses.analysis";

const ExpensesLayout = () => {
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY} />
      </main>
    </>
  );
};

export default ExpensesLayout;

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: expensesStyles }];
};
