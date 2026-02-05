import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Academy from "./pages/Academy";
import Tools from "./pages/Tools";
import Security from "./pages/Security";
import IranianHub from "./pages/IranianHub";
import FutureInsights from "./pages/FutureInsights";
import Library from "./pages/Library";
import Community from "./pages/Community";
import Marketplace from "./pages/Marketplace";
import Support from "./pages/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "academy", element: <Academy /> },
      { path: "tools", element: <Tools /> },
      { path: "security", element: <Security /> },
      { path: "iranian-hub", element: <IranianHub /> },
      { path: "future", element: <FutureInsights /> },
      { path: "library", element: <Library /> },
      { path: "community", element: <Community /> },
      { path: "marketplace", element: <Marketplace /> },
      { path: "support", element: <Support /> },
    ],
  },
]);
