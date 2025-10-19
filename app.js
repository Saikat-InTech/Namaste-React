import React from "react";
import ReactDOM from "react-dom/client";
import FoodPage from "./src/components/FoodPage";
import {createBrowserRouter,RouterProvider} from 'react-router';
import About from"./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact"



const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<FoodPage/>,
        errorElement:<Error/>
    },
    {
        path:"/about",
        element:<About/>,
      
    },
    {
        path:"/contact",
        element:<Contact/>,
       
    }
])




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);




