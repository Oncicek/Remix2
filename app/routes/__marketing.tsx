import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import marketingStyles from "../styles/marketing.css";
import { MainHeader } from "../components/navigation/MainHeader";

const MarketingLayout = () => (
  <>
    <MainHeader />
    <Outlet />
  </>
);

export default MarketingLayout;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: marketingStyles },
];
