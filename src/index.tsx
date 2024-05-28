import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardAdmin from "./pages/administration/Dashboard";
import DashboardHealth from "./pages/health/Dashboard";
import DashboardIndustry from "./pages/industry/Dashboard";
import ReportsAdmin from "./pages/administration/Reports";
import ReportsHealth from "./pages/health/Reports";
import ReportsIndustry from "./pages/industry/Reports";
import SensorsAdmin from "./pages/administration/Sensors";
import SensorsHealth from "./pages/health/Sensors";
import SensorsIndustry from "./pages/industry/Sensors";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/",
    element: <DashboardAdmin />,
    children: [
      {
        path: "dashboard", // Remove leading slash
        element: <DashboardAdmin />,
      },
      {
        path: "reports", // Remove leading slash
        element: <ReportsAdmin />,
      },
      {
        path: "sensors", // Remove leading slash
        element: <SensorsAdmin />,
      },
    ],
  },
  {
    path: "/health",
    element: <DashboardHealth />,
    children: [
      {
        path: "reports", // Remove leading slash
        element: <ReportsHealth />,
      },
      {
        path: "sensors", // Remove leading slash
        element: <SensorsHealth />,
      },
    ],
  },
  {
    path: "/industry",
    element: <DashboardIndustry />,
    children: [
      {
        path: "reports", // Remove leading slash
        element: <ReportsIndustry />,
      },
      {
        path: "sensors", // Remove leading slash
        element: <SensorsIndustry />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
