import React, { useState } from "react";
import TextField from "../../../components/TextInput/TextInput";

const OTPVerification = () => {
    const [otp, setOtp] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("OTP Submitted:", otp);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-red-50 via-white to-red-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white px-8 py-10 shadow-2xl sm:max-w-xl sm:px-10 sm:py-12">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight text-customRed">OTP Verification</h1>
                    <p className="mt-2 text-sm text-customGrey">Enter the code sent to your email or phone.</p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    {/* OTP Input */}
                    <div>  
                        <TextField
                            label="OTP" 
                            name="otp"
                            type="text"
                            value={otp}
                            valueChange={(e) => setOtp(e.target.value)}
                            required={true}
                            placeHolder="Enter your otp"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-customRed py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-red-700"
                    >
                        Verify OTP
                    </button>
                </form>

                {/* Resend */}
                <p className="mt-6 text-center text-sm text-customGrey">
                    Didn’t receive the code?{" "}
                    <button
                        className="font-medium text-customRed hover:underline"
                        type="button"
                    >
                        Resend OTP
                    </button>
                </p>
            </div>
        </div>
    );
};

export default OTPVerification;
