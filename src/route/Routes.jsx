import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home";
import Login from "../page/Login";
import Registration from "../page/Registration";
import AddServices from "../page/AddServices";
import MyServices from "../page/MyServices ";
import PrivateRoute from "./PrivateRoute";
import UpdateService from "../page/UpdateService";
import ServicesPage from "../page/ServicesPage";
import ServiceInfoPage from "../page/ServiceInfoPage";


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
                element:
                    <PrivateRoute>
                        <AddServices></AddServices>
                    </PrivateRoute>
            },
            {
                path: "/myServices",
                element:
                    <PrivateRoute>
                        <MyServices></MyServices>
                    </PrivateRoute>
            },
            {
                path: "/update/:id",
                element:
                    <PrivateRoute>
                        <UpdateService></UpdateService>
                    </PrivateRoute>
            },
            {
                path: "/services",
                element:
                    <PrivateRoute>
                        <ServicesPage></ServicesPage>
                    </PrivateRoute>
            },
            {
                path: "/serviceinfo/:id",
                element:
                    <PrivateRoute>
                        <ServiceInfoPage></ServiceInfoPage>
                    </PrivateRoute>
            },
        ],
    },
]);


export default router
