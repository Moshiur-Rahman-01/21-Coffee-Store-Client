import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../Pages/Homepage/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../Pages/Homepage/UpdateCoffee";
import CoffeeDetails from "../Pages/Homepage/CoffeeDetails";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Users from "../Extra file/Users MongoDB/Users";
import Users2 from "../Extra file/Users MongoDB/Users2";

export const router = createBrowserRouter([
    {
        path: "/",
        // element: <div>Hello World</div>,
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/coffees'),
                Component: Home
            },
            {
                path: 'addcoffee',
                Component: AddCoffee
            },
            {
                path: 'updatecoffee/:id',
                loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
                Component: UpdateCoffee
            },
            {
                path: '/coffeedetails/:id',
                loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
                Component: CoffeeDetails
            },
            {
                path: '/signin',
                Component: SignIn
            },
            {
                path: 'register',
                Component: SignUp
            },
            {
                path: 'users',
                loader: () => fetch('http://localhost:3000/users'),
                Component: Users
            },
            {
                path: '/users2',
                element: <Users2></Users2>,
            }
        ]
    },
]);
