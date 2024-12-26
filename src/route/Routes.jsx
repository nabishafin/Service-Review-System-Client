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
import MyReviews from "../page/MyReviews";
import UpdateReview from "../page/UpdateReview";
import ErrorPage from "../components/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/registration",
                element: <Registration />
            },
            {
                path: "/addservice",
                element:
                    <PrivateRoute>
                        <AddServices />
                    </PrivateRoute>
            },
            {
                path: "/myServices",
                element:
                    <PrivateRoute>
                        <MyServices />
                    </PrivateRoute>
            },
            {
                path: "/update/:id",
                element:
                    <PrivateRoute>
                        <UpdateService />
                    </PrivateRoute>
            },
            {
                path: "/services",
                element:
                    <PrivateRoute>
                        <ServicesPage />
                    </PrivateRoute >
            },
            {
                path: "/serviceinfo/:id",
                element:
                    <PrivateRoute>
                        <ServiceInfoPage />
                    </PrivateRoute >
            },
            {
                path: "/reviews",
                element:
                    <PrivateRoute>
                        <MyReviews />
                    </PrivateRoute>
            },
            {
                path: "/updatereview/:id",
                element:
                    <PrivateRoute>
                        <UpdateReview />
                    </PrivateRoute>
            },
        ],
    },
]);


export default router
