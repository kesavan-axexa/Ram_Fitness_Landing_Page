import { lazy, Suspense, useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/contexts/theme-context";
import { Toaster } from "sonner";

import Layout from "./layout";
import UserLayout from "./userLayout";
import NotFound from "./components/Common/NotFound";
import DotLoader from "./components/Loader/DotLoader";

// Lazy Pages
const HomePage = lazy(() => import("./pages/Home/Page"));
const TransformNowIndex = lazy(() => import("./pages/TransformNow/TransformNowIndex"));

const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-customBlack/80">
        <DotLoader />
    </div>
);

function App() {
    const router = useMemo(
        () =>
            createBrowserRouter([
                {
                    path: "/",
                    element: <UserLayout />,
                    children: [
                        {
                            index: true,
                            element: (
                                <Suspense fallback={<PageLoader />}>
                                    <HomePage />
                                </Suspense>
                            ),
                        },
                        {
                            path: "transform-now",
                            element: (
                                <Suspense fallback={<PageLoader />}>
                                    <TransformNowIndex />
                                </Suspense>
                            ),
                        },
                        { path: "*", element: <NotFound /> },
                    ],
                },

                {
                    path: "/admin",
                    element: <Layout />,
                    children: [
                        { path: "dashboard", element: <div className="title">Dashboard</div> },
                        { path: "*", element: <NotFound /> },
                    ],
                },

                { path: "*", element: <NotFound /> },
            ]),
        []
    );

    return (
        <ThemeProvider storageKey="theme">
            <Toaster
                position="top-center"
                toastOptions={{
                    style: {
                        background: "white",
                        color: "#333",
                        border: "1px solid #ddd",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                        borderRadius: "10px",
                        fontSize: "16px",
                    },
                }}
            />

            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
