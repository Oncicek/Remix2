import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import expensesStyles from "../styles/expenses.css";
import ExpensesHeader from "../components/navigation/ExpensesHeader";

const ExpensesAppLayout = () => (
  <>
    <ExpensesHeader />
    <Outlet />
  </>
);

export default ExpensesAppLayout;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyles },
];
