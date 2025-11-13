import { Link, PackageCheck, Phone } from "lucide-react";
import React from "react";

const TopBar = () => {
    return (
        <div className="w-full bg-customNavy1 px-6 py-3.5 text-sm font-light text-white">
            <div className="flex items-center justify-between flex-wrap gap-2 md:flex-nowrap">
                
                {/* Left Side - Logo */}
                <div className="hidden lg:flex items-center space-x-2">
                    <PackageCheck className="h-6 w-6 text-white" />
                    <span className="text-xl uppercase text-white">E-commify</span>
                </div>

                {/* Right Side - Info */}
                <div className="flex items-center justify-center sm:justify-end gap-3 w-full lg:w-auto text-xs md:text-sm">
                    <p className="cursor-pointer hover:underline">Become a Member</p>
                    <span className="">|</span>
                    <p className="cursor-pointer hover:underline">Help & Support</p>
                    <span className="">|</span>
                    {/* Show icon below md, full text on md+ */}
                    <p className="cursor-pointer hover:underline flex items-center">
                        <span className="md:hidden"><Phone className="h-4 w-4" /></span>
                        <span className="hidden md:inline">Call Us: 8778990131</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
