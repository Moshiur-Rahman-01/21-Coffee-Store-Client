import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Extra file/Home";
import AddCoffee from "../Extra file/AddCoffee";
import UpdateCoffee from "../Extra file/UpdateCoffee";
import CoffeeDetails from "../Extra file/CoffeeDetails";
import SignIn from "../Extra file/Form/SignIn";
import SignUp from "../Extra file/Form/SignUp";
import Users from "../Extra file/Users MongoDB/Users";

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
                path: 'signup',
                Component: SignUp
            },
            {
                path: 'users',
                loader: () => fetch('http://localhost:3000/users'),
                Component: Users
            }
        ]
    },
]);
