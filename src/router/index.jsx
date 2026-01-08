import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@layout";
import { Home, ErrorPage, Users, CreateUser, UserPage, Dashboard } from "@pages";
// import { usersLoader, userLoader } from "@loaders";
import { createUserAction, deleteUserAction } from "@actions";

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
                element: <Users />
                // loader: usersLoader
            },
            {
                path: "users/:id",
                element: <UserPage />
                // loader: userLoader
            },
            {
                path: "users/new",
                element: <CreateUser />,
                action: createUserAction
            },
            {
                path: "users/:id/delete",
                action: deleteUserAction
            },
            {
                index: true,
                element: <Dashboard />
            }
        ]
    }
]);
