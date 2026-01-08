import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@router";
import "@styles/spinner.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider
            router={router}
            fallbackElement={<span className="loader"></span>}
        />
    </React.StrictMode>
);