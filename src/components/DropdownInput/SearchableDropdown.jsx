import React, { useState, useEffect, useRef } from "react";
import styles from "../../textfield1.module.css";
import { FaChevronDown } from "react-icons/fa";

const SearchableDropdown = ({
    label,
    name,
    options,
    required,
    valueChange,
    value,
    disable,
    error,
    style,
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Reference to the dropdown element

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDropdownChange = (option) => {
        valueChange(option.value, name); // Pass selected value to parent
        setIsDropdownOpen(false); // Close dropdown
        setSearchTerm(""); // Clear search term
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false); // Close dropdown if clicked outside
        }
    };

    // Attach and detach event listener for outside clicks
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Filter options based on the search term
    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.textField} ref={dropdownRef}>
            {/* Label */}
            <label htmlFor={name} className="text-sm font-bold text-customTextGrey1">
                {label}
                {required && <span className="text-customRed"> *</span>}
            </label>

            {/* Dropdown */}
            <div
                className={`relative w-full ${style || "mt-3 md:w-80 w-full text-xs border-b border-opacity-90"
                    } ${error ? "border-customRed" : "border-customGrey9"}`}
            >
                <div
                    className="flex items-center justify-between cursor-pointer px-1 mt-1 border-b border-opacity-90"
                    onClick={() => !disable && setIsDropdownOpen(!isDropdownOpen)}
                >
                    <span className="text-xs">
                        {options.find((option) => option.value === value)?.label ||
                            "Choose"}
                    </span>
                    <FaChevronDown size={11} className="text-gray-500 ml-2" />
                </div>

                {isDropdownOpen && (
                    <div className="absolute z-10 w-full bg-white border rounded-lg shadow-lg">
                        {/* Search Input */}
                        <div className="p-2 border-b">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="w-full px-2 py-1 text-sm border rounded focus:outline-none"
                            />
                        </div>

                        {/* Options */}
                        <div className="max-h-60 overflow-y-auto">
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleDropdownChange(option)}
                                        className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${value === option.value ? "bg-gray-200" : ""
                                            }`}
                                    >
                                        {option.label}
                                    </div>
                                ))
                            ) : (
                                <div className="px-3 py-2 text-sm text-gray-500">
                                    No options found
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Error Message */}
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
};

export default SearchableDropdown;
