import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaCheckCircle } from "react-icons/fa";
import styles from "../../textfield1.module.css";

const MultiSelect = ({
    label, name, options, required, isMultiSelect = false, valueChange, value = [], disable, error
}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        if (!disable) setShowDropdown(!showDropdown);
    };

    // Handle option changes
    const handleOptionChange = (selectedOption) => {
        if (isMultiSelect) {
            const updatedValues = value.some(val => val.value === selectedOption.value)
                ? value.filter((val) => val.value !== selectedOption.value)
                : [...value, selectedOption];
            valueChange(updatedValues, name);

        } else {
            valueChange([selectedOption], name);
            setShowDropdown(false); // Close dropdown for single select
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className={styles.textField}>
            <label className="block text-sm font-bold text-customTextGrey1">
                {label}
                {required && <span className="text-customRed"> *</span>}
            </label>

            <div className="relative">
                {/* Dropdown display field */}
                <div
                    className={`mt-3 flex items-center justify-between w-full text-xs border-b border-opacity-90 border-customGrey9 ${error ? "border-customRed" : "focus:border-customNavy"}`}
                    onClick={toggleDropdown}
                >
                    {/* Show selected values */}
                    <div className="text-xs text-customBlack font-opensans">
                        {value.length > 0
                            ? value.map(val => val.label).join(', ')
                            : `Select ${label}`}
                    </div>

                    {/* Right-side dropdown icon */}
                    <FaChevronDown className="text-gray-500" />
                </div>
                {showDropdown && (
                    <div className="absolute bg-white w-full border border-gray-300 z-50 max-h-40 overflow-y-auto rounded-[8px]">
                        {options.map((option) => {
                            const isSelected = value.some(val => val.value === option.value);

                            return (
                                <div
                                    key={option.value}
                                    className={`flex items-center p-2 cursor-pointer ${isSelected ? "bg-blue-100" : ""}`} // Add bg-blue-100 for selected
                                    onClick={() => handleOptionChange(option)}
                                >
                                    {isSelected && (
                                        <span className="flex items-center mr-2">
                                            <FaCheckCircle className="text-customNavy text-sm" />
                                        </span>
                                    )}
                                    <label className="text-customBlack text-xs hover:cursor-pointer">
                                        {option?.label?.charAt(0).toUpperCase() + option?.label?.slice(1)}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Selected categories display */}
            {isMultiSelect && value.length > 0 && (
                <div className="mt-2">
                    {value.map((selectedValue) => (
                        <div key={selectedValue.value} className="inline-flex items-center px-3 py-1 text-xs bg-gray-100 rounded-full mt-2">
                            <span className="text-customBlack">{selectedValue?.label?.charAt(0).toUpperCase() + selectedValue?.label?.slice(1)}</span>
                            <button
                                onClick={() => {!disable ? handleOptionChange(selectedValue) : ""}}
                                className="ml-2 text-black text-sm bg-white rounded-full w-5 h-5 flex items-center justify-center"
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Error message */}
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
};

export default MultiSelect;
