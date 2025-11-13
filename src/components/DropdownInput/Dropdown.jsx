import React from "react";
import styles from "../../textfield1.module.css";

const DropdownField = ({
  label,
  name,
  options,
  required,
  valueChange,
  value,
  disable,
  error,
  style,
  componentName,
  customWidth,
}) => {
  // const handleDropdownChange = (event) => {
  //   const selectedOption = options.find(option => option.label === event.target.value);
  //   const newValue = selectedOption ? selectedOption.value : null;
  //   valueChange(newValue, name);
  // };
  const handleDropdownChange = (event) => {
    const selectedOption = options.find(
      (option) => option.label === event.target.value
    );
    const newValue = selectedOption ? selectedOption.value : null;

    if (componentName === "FormikValidation") {
      valueChange({ target: { name, value: newValue } });
    } else {
      valueChange(newValue, name);
    }
  };

  return (
    <div className={styles.textField}>
      <label htmlFor={name} className="text-sm font-bold text-customTextGrey1">
        {label}
        {required && <span className="text-customRed"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        disabled={disable}
        value={options?.find((option) => option.value === value)?.label || ""}
        onChange={handleDropdownChange}
        className={
          style
            ? style +
              ` ${
                customWidth === "ContactInput"
                  ? "md:60 w-full "
                  : " md:w-80 w-full"
              } text-xs focus:outline-none border-b border-opacity-90 border-customGrey9 ${
                error ? "border-customRed" : "focus:border-customNavy"
              }`
            : `mt-3 ${
                customWidth === "ContactInput"
                  ? "md:60 w-full "
                  : " md:w-80 w-full"
              }  text-xs focus:outline-none border-b border-opacity-90 border-customGrey9 ${
                error ? "border-customRed" : "focus:border-customNavy"
              }`
        }
      >
        <option value="">Choose</option>
        {options?.map((option, index) => (
          <option key={index} className="" value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
      {error && !value && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default DropdownField;
