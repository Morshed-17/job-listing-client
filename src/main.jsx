import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./routes/MainRouter";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <NextUIProvider>
        <RouterProvider router={MainRouter} />
      </NextUIProvider>
    </AuthProvider>
  </React.StrictMode>
);
