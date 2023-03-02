import type { LoaderFunction } from "@remix-run/node";
import { DUMMY } from "./__app/expenses.analysis";

export const loader: LoaderFunction = () => {
  return DUMMY;
};
