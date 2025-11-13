import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import TextField from "../../../components/TextInput/TextInput";

const CreateAccount = ({ data, setData, mode, userLists, setUserLists, setMode, setActiveComponent }) => {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-red-50 via-white to-red-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white px-8 py-10 shadow-2xl sm:max-w-xl sm:px-10 sm:py-12">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight text-customRed">Create Account</h1>
                    <p className="mt-2 text-sm text-customGrey">Join us by creating your free account.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Name and Phone Number */}
                    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                        <div className="w-full">
                            <TextField
                                label="Name"
                                name="name"
                                type="text"
                                value={formData.name}
                                valueChange={(value) => setFormData((prev) => ({ ...prev, name: value }))}
                                required={true}
                                placeHolder="Enter your name"
                            />
                        </div>
                        <div className="w-full">
                            <TextField
                                label="Phone Number"
                                name="phoneNumber"
                                type="number"
                                value={formData.phoneNumber}
                                valueChange={(value) => setFormData((prev) => ({ ...prev, phoneNumber: value }))}
                                required={true}
                                placeHolder="Enter your phone number"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        valueChange={(value) => setFormData((prev) => ({ ...prev, email: value }))}
                        required={true}
                        placeHolder="Enter your email"
                    />

                    {/* Password */}
                    <div className="relative">
                        <TextField
                            label="Password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            valueChange={(value) => setFormData((prev) => ({ ...prev, password: value }))}
                            required={true}
                            placeHolder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-12 text-customGrey focus:outline-none"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <TextField
                            label="Confirm Password"
                            name="confirmPassword"
                            type={showConfirm ? "text" : "password"}
                            value={formData.confirmPassword}
                            valueChange={(value) => setFormData((prev) => ({ ...prev, confirmPassword: value }))}
                            required={true}
                            placeHolder="Re-enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute right-4 top-12 text-customGrey focus:outline-none"
                        >
                            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        onClick={() => {
                            setActiveComponent("OTPVerification");
                        }}
                        className="w-full rounded-xl bg-customRed py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-red-700"
                    >
                        Sent OTP
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 border-t border-gray-200" />

                {/* Footer */}
                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <span
                        onClick={() => {
                            setActiveComponent("Login");
                        }}
                        className="font-medium text-customRed hover:cursor-pointer hover:underline"
                    >
                        Sign in
                    </span>
                </p>
            </div>
        </div>
    );
};

export default CreateAccount;
