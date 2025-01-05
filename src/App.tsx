import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import { routes } from "./routes";

const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: routes.map((route) => ({ ...route })),
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
