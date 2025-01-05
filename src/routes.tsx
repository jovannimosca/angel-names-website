import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import SupportPage from "./pages/Support";
import GetInvolvedPage from "./pages/GetInvolved";
import EventsPage from "./pages/Events";
import { NonIndexRouteObject, IndexRouteObject } from "react-router-dom";

interface NonIndexRouteInfo extends NonIndexRouteObject {
   id: string;
   title: string;
   showInNavBar?: boolean;
}
interface IndexRouteInfo extends IndexRouteObject {
   id: string;
   title: string;
   showInNavBar?: boolean;
}

type RouteInfo = NonIndexRouteInfo | IndexRouteInfo;

export const routes: RouteInfo[] = [
   {
      id: "home",
      title: "Home",
      showInNavBar: true,
      path: "",
      element: <HomePage />,
      index: true,
   },
   {
      id: "about",
      title: "Who We Are",
      showInNavBar: true,
      path: "who-we-are",
      element: <AboutPage />,
   },
   {
      id: "support",
      title: "Support",
      showInNavBar: true,
      path: "support",
      element: <SupportPage />,
   },
   {
      id: "involvement",
      title: "Get Involved",
      showInNavBar: true,
      path: "get-involved",
      element: <GetInvolvedPage />,
   },
   {
      id: "events",
      title: "Events",
      showInNavBar: true,
      path: "events",
      element: <EventsPage />,
   },
];

export function getPath(routeId: string): string {
   const matchingRoutes: RouteInfo[] = routes.filter(
      ({ id }) => id === routeId
   );
   if (matchingRoutes.length < 1) {
      return "";
   } else if (matchingRoutes.length > 1) {
      return "undefined";
   } else {
      return matchingRoutes[0].path ? matchingRoutes[0].path : "";
   }
}
