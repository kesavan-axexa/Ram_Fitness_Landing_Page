import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import TextField from "../../../components/TextInput/TextInput";

const Login = ({ data, setData, mode, userLists, setUserLists, setMode, setActiveComponent }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({}); // Optional: handle form validation errors

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...formData, rememberMe });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-red-50 via-white to-red-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white px-8 py-10 shadow-2xl sm:px-10 sm:py-12">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight text-customRed">Sign In</h1>
                    <p className="mt-2 text-sm text-customGrey">Welcome back! Please enter your credentials.</p>
                </div>

                {/* Form */}
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit}
                >
                    {/* Email */}
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        valueChange={(newValue) => setFormData({ ...formData, email: newValue })}
                        required={true}
                        placeHolder="Enter your email"
                        error={errors.email}
                    />

                    {/* Password */}
                    <div className="relative">
                        <TextField
                            label="Password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            valueChange={(newValue) => setFormData({ ...formData, password: newValue })}
                            required={true}
                            placeHolder="Enter your password"
                            error={errors.password}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-12 text-customGrey focus:outline-none"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between sm:text-sm text-xs">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                                className="h-3 w-3 rounded border-gray-300 text-customRed"
                            />
                            <span className="text-gray-700">Remember me</span>
                        </label>
                        <a
                            href="#"
                            className="text-customRed hover:underline"
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-customRed py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-red-700"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 border-t border-gray-200"></div>

                {/* Footer */}
                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <span
                        onClick={() => {
                            setActiveComponent("CreateAccount");
                        }}
                        className="font-medium text-customRed hover:underline hover:cursor-pointer"
                    >
                        Create one
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
