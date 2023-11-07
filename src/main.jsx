import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./routes/MainRouter";
import AuthProvider from "./provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <QueryClientProvider client={client}>
  <AuthProvider>
      <NextUIProvider>
        <RouterProvider router={MainRouter} />
      </NextUIProvider>
    </AuthProvider>
  </QueryClientProvider>
    
  </React.StrictMode>
);
