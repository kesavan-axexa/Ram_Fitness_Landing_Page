import React from "react";
import { APPCONFIG } from "../../constants/AppConfig";

const TextField = React.forwardRef(
    (
        {
            label,
            sublabel = "",
            name,
            type = "text",
            valueChange,
            value,
            error,
            required,
            onBlur,
            disable,
            style,
            placeHolder = "Type here",
            maxLength,
            readOnly,
            componentName,
            customWidth,
            autoFocus = false,
            touched,
        },
        ref,
    ) => {
        const inputFieldValueChanges = (event) => {
            const newValue = event.target.value;
            if (maxLength && newValue.length > maxLength) {
                return;
            }
            if (componentName === "FormikValidation") {
                valueChange({ target: { name, value: newValue } });
            } else {
                valueChange(newValue, name);
            }
        };

        return (
            <div className="mb-5 w-full">
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-700"
                >
                    {label}
                    <span className={sublabel === "(0 characters remaining)" ? "text-red-500" : "text-gray-500"}>{sublabel}</span>
                    {required && <span className="text-red-600"> *</span>}
                </label>

                <div className="relative mt-1">
                    <input
                        ref={ref}
                        id={name}
                        name={name}
                        disabled={disable}
                        type={type}
                        value={value || ""}
                        onBlur={onBlur}
                        autoFocus={autoFocus}
                        onChange={inputFieldValueChanges}
                        placeholder={placeHolder}
                        maxLength={maxLength}
                        min={type === "number" ? 1 : undefined}
                        readOnly={readOnly}
                        inputMode={type === "number" ? "numeric" : undefined}
                        onKeyDown={(e) => {
                            if (type === "number" && ["e", "E", "+", "-"].includes(e.key)) {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            if (type === "number") {
                                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                            }
                        }}
                        className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm ${
                            error ? "border-red-500" : "border-gray-300"
                        } focus:outline-none  ${type === "number" ? "hide-arrow" : ""}`}
                    />
                </div>

                {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
            </div>
        );
    },
);

export default TextField;
