import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/contexts/theme-context";
import Layout from "./layout";
import HomePage from "./pages/Home/Page";
import NotFound from "./components/Common/NotFound";
import { Toaster } from "sonner";
import TransformNowIndex from "./pages/TransformNow/TransformNowIndex";
import UserLayout from "./userLayout";

const Dashboard = () => <h1 className="title">Dashboard</h1>;

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <UserLayout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "transform-now",
                    element: <TransformNowIndex />,
                },
                {
                    path: "*",
                    element: <NotFound />,
                },
            ],
        },
        {
            path: "*",
            element: <NotFound />,
        },
        {
            path: "/admin",
            element: <Layout />,
            children: [
                {
                    // index: true,
                    path: "dashboard",
                    element: <Dashboard />,
                },
                {
                    path: "*",
                    element: <NotFound />,
                },
            ],
        },
    ]);

    const baseStyle = {
        background: "white",
        color: "#333",
        border: "1px solid #ddd",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        borderRadius: "10px",
        fontSize: "16px",
    };

    return (
        <ThemeProvider storageKey="theme">
            <Toaster
                position="top-center"
                toastOptions={{
                    style: baseStyle,
                }}
            />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
