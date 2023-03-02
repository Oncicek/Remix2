import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import expensesStyles from "../styles/expenses.css";

const ExpensesAppLayout = () => {
  return <Outlet />;
};

export default ExpensesAppLayout;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyles },
];
