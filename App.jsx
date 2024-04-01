import React from 'react';
import Home from './Home';
import Main from './Main';
import { ReactProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './Cart';

import {
    RouterProvider, Link
} from "react-router-dom";



const App = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "cart",
                    element: <Cart />
                }
            ]
        }
    ]);
    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    );
}

export default App;
