import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home";
import Login from "../page/Login";
import Registration from "../page/Registration";
import AddServices from "../page/AddServices";
import MyServices from "../page/MyServices ";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/addservice",
                element: <AddServices></AddServices>
            },
            {
                path: "/myServices",
                element:
                    <PrivateRoute>
                        <MyServices></MyServices>
                    </PrivateRoute>
            },

        ],
    },
]);


export default router
