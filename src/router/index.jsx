import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@layout";
import { Home, ErrorPage, Users, User, UsersSlow } from "@pages";
import { usersLoader, userLoader, usersLoaderSlow } from "@loaders";

export const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "users",
                element: <Users />,
                loader: usersLoader
            },
            {
                path: "usersslow",
                element: <UsersSlow />,
                loader: usersLoaderSlow
            },
            {
                path: "users/:id",
                element: <User />,
                loader: userLoader
            }
        ]
    }
]);
