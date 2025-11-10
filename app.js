import { lazy } from "react";
import ReactDOM from "react-dom/client";
import FoodPage from "./src/components/FoodPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import Mencard from "./src/components/Menucard";
import Menucard from "./src/components/Menucard";

const About = lazy(() => import("./src/components/About"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodPage />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/menucard",
    element: <Menucard />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
