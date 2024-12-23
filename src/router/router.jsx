import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

import AllMarathon from "../pages/AllMarathon/AllMarathon";
import MarathonDetails from "../pages/MarathonDetails/MarathonDetails";
import AddMarathonForm from "../pages/AddMarathonForm/AddMarathonForm";
import Blog from "../pages/Resources/Blog";
import TrainingTips from "../pages/Resources/TrainingTips";
import NutritionsGuides from "../pages/Resources/NutritionsGuides";
import GearRecommendations from "../pages/Resources/GearRecommendations";
import MyApply from "../pages/MyApply/MyApply";
import MyMarathons from "../MyMarathons/MyMarathons";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,

            },
            {
                path: '/all_marathon',
                element: <AllMarathon />,
            },
            {
                path: '/all_marathon/:id',
                element: <PrivateRoute><MarathonDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/marathons/${params.id}`)
            },
            {
                path: '/add_marathon',
                element: <PrivateRoute><AddMarathonForm /></PrivateRoute>,

            },
            {
                path: '/my_marathon',
                element: <PrivateRoute><MyMarathons /></PrivateRoute>,
            },
            {
                path: '/my_apply',
                element: <PrivateRoute><MyApply /></PrivateRoute>,
            },
            {
                path: '/blog',
                element: <Blog />,
            },

            {
                path: '/training-tips',
                element: <TrainingTips />,
            },
            {
                path: '/nutrition-guides',
                element: <NutritionsGuides />,
            },
            {
                path: '/gear-recommendations',
                element: <GearRecommendations />,
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: 'signIn',
                element: <SignIn />
            },
        ],

    },
]);

export default router;