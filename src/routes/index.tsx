import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Login";
import OauthPage from "@/pages/Oauth";
import FeedPage from "@/pages/Feed";



// import LoginPage from "@/pages/Login";

import { RouterPath } from "./path";

const router = createBrowserRouter([
    {
        path: RouterPath.home,
        element: <HomePage />,
    },
    // {
    //     path: RouterPath.layout,
    //     element: <Layout />,
    //     children: [
    //         {
    //             path: RouterPath.myPage,
    //             element: <MyPage />
    //         },
    //         {
    //             path: RouterPath.challenge,
    //             element: <ChallengeFeedPage />
    //         }
    //     ]
    // },
    {
        path: RouterPath.login,
        element: <LoginPage />,
    },
    {
        path: RouterPath.feed,
        element: <FeedPage />,
    },
]);

export const Routes = () => {
    return<RouterProvider router={router} />
}