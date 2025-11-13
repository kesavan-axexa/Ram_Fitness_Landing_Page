import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/contexts/theme-context";
import Layout from "./layout";
import UserIndex from "./pages/Auth/UserLogin/UserIndex";
import HomePage from "./pages/Home/Page";
import NotFound from "./components/Common/NotFound";
import { Toaster } from "sonner";
// import UserLogin from "./pages/Login/userLogin";

const About = () => <h1 className="title">About Us</h1>;
const Contact = () => <h1 className="title">Contact</h1>;

const Dashboard = () => <h1 className="title">Dashboard</h1>;
const Analytics = () => <h1 className="title">Analytics</h1>;
const Reports = () => <h1 className="title">Reports</h1>;
const Customers = () => <h1 className="title">Customers</h1>;
const NewCustomer = () => <h1 className="title">New Customer</h1>;
const VerifiedCustomers = () => <h1 className="title">Verified Customers</h1>;
const Products = () => <h1 className="title">Products</h1>;
const NewProduct = () => <h1 className="title">New Product</h1>;
const Inventory = () => <h1 className="title">Inventory</h1>;
const Settings = () => <h1 className="title">Settings</h1>;

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/login",
            element: <UserIndex />,
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
                {
                    path: "analytics",
                    element: <Analytics />,
                },
                {
                    path: "reports",
                    element: <Reports />,
                },
                {
                    path: "customers",
                    element: <Customers />,
                },
                {
                    path: "new-customer",
                    element: <NewCustomer />,
                },
                {
                    path: "verified-customers",
                    element: <VerifiedCustomers />,
                },
                {
                    path: "products",
                    element: <Products />,
                },
                {
                    path: "new-product",
                    element: <NewProduct />,
                },
                {
                    path: "inventory",
                    element: <Inventory />,
                },
                {
                    path: "settings",
                    element: <Settings />,
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
