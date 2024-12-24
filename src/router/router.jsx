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
import MyMarathon from "../pages/MyMarathon/MyMarathon";
import UpdateMyMarathon from "../pages/UpdateMyMarathon/UpdateMyMarathon";
import ForgotPassWord from "../pages/SignIn/ForgotPassWord";
import CharityEvents from "../pages/Events/CharityEvents";
import RaceResults from "../pages/Events/RaceResults";
import Profile from "../pages/ProfileRoute/Profile";
import Settings from "../pages/ProfileRoute/Settings";
import VirtualRuns from "../pages/Events/VirtualRuns";
import Faq from "../pages/Contact/Faq";
import GetInTouch from "../pages/Contact/GetInTouch";
import AboutUs from "../pages/Contact/AboutUs";





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
                element: <PrivateRoute><MyMarathon /></PrivateRoute>,

            },
            {
                path: '/update-marathon/:id',
                element: <PrivateRoute><UpdateMyMarathon /></PrivateRoute>,
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
                path: '/charity_events',
                element: <CharityEvents />,
            },
            {
                path: '/race-results',
                element: <RaceResults />,
            },
            {
                path: '/virtual-runs',
                element: <VirtualRuns />,
            },
            {
                path: '/faqs',
                element: <Faq />,
            },
            {
                path: '/contact',
                element: <GetInTouch />,
            },
            {
                path: '/about-us',
                element: <AboutUs />,
            },

            {
                path: '/register',
                element: <Register />
            },
            {
                path: 'signIn',
                element: <SignIn />
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>,
            },
            {
                path: '/settings',
                element: <PrivateRoute><Settings /></PrivateRoute>,
            },
            {
                path: '/forgot-password',
                element: <ForgotPassWord />,
            }
        ],

    },
]);

export default router;