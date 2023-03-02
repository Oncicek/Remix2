import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import expensesStyles from "../../styles/expenses.css";
import ExpensesList from "../../components/expenses/ExpensesList";
import { DUMMY } from "./expenses.analysis";

const ExpensesLayout = () => {
  return (
    <>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="add">
            <span>Add expense</span>
          </Link>
        </section>
        <ExpensesList expenses={DUMMY} />
      </main>
    </>
  );
};

export default ExpensesLayout;

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: expensesStyles }];
};
