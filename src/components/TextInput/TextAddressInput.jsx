// import React from "react";
// import styles from "../../textfield1.module.css";

// const TextField = React.forwardRef(
//   (
//     {
//       label,
//       sublabel = "",
//       name,
//       type = "text",
//       valueChange,
//       value,
//       error,
//       required,
//       onBlur,
//       disable,
//       style,
//       placeHolder = "Type here",
//       maxLength,
//       readOnly,
//       componentName,
//       customWidth,
//       autoFocus = false,
//       touched,

//     },
//     ref
//   ) => {
//     const inputFieldValueChanges = (event) => {
//       const newValue = event.target.value;
//       if (maxLength && newValue.length > maxLength) {
//         return;
//       }
//       if (componentName === "FormikValidation") {
//         valueChange({ target: { name, value: newValue } });
//       } else {
//         valueChange(newValue, name);
//       }
//     };

//     return (
//       <div className={styles.textField}>
//         <label htmlFor={name}>
//           {label}
//           <span
//             className={
//               sublabel === " (0 characters remaining)"
//                 ? "text-customRed"
//                 : "text-customTextGrey2"
//             }
//           >
//             {sublabel}
//           </span>
//           {required && <span className="text-customRed"> *</span>}
//         </label>
//         <input
//           ref={ref} // Attach ref here
//           id={name}
//           name={name}
//           disabled={disable}
//           type={type}
//           value={value || ""}
//           onBlur={onBlur}
//           autoFocus={autoFocus}
//           onChange={inputFieldValueChanges}
//           placeholder={placeHolder}
//           maxLength={maxLength}
//           className={
//             style
//               ? style + (error ? "border-customRed" : "focus:border-customNavy")
//               : `mt-3 ${customWidth === "ContactInput" ? "xl:w-60 w-full" : " md:w-80 w-full"} hide-arrow text-xs focus:outline-none border-b border-opacity-90 border-customGrey9 ${
//                   error ? "border-customRed" : "focus:border-customNavy"
//                 }`
//           }
//           min={type === "number" ? 1 : undefined}
//           readOnly={readOnly}
//         />
//         {error && <span className={styles.errorMessage}>{error}</span>}
//       </div>
//     );
//   }
// );

// export default TextField;

import React, { useRef, useEffect } from "react";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import styles from "../../textfield1.module.css";

const libraries = ["places"];

const TextAddressField = React.forwardRef(
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
      isAddressField = false, // New prop to enable Google Autocomplete
    },
    ref
  ) => {
    const MAP_API_KEY = import.meta.env.VITE_APP_MAP_API_KEY;

    const { isLoaded } = useLoadScript({
      googleMapsApiKey: MAP_API_KEY, // Replace with your actual API key
      libraries,
    });

    const autocompleteRef = useRef(null);

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

    const handlePlaceSelect = () => {
      const place = autocompleteRef.current.getPlace();
      console.log("place", place);

      if (!place?.address_components) return;

      let address = "";
      let city = "";
      let state = "";
      let country = "";
      let postalCode = "";

      place.address_components.forEach((component) => {
        const types = component.types;

        if (types.includes("street_number") || types.includes("route")) {
          address += (address ? " " : "") + component.long_name;
        }
        if (types.some((type) => ["locality", "neighborhood"].includes(type))) {
          city = component.long_name;
        }
        if (types.includes("administrative_area_level_1")) {
          state = component.long_name;
        }
        if (types.includes("country")) {
          country = component.long_name;
        }
        if (types.includes("postal_code")) {
          postalCode = component.long_name;
        }
      });

      console.log("Extracted Address Details:", {
        address,
        city,
        state,
        country,
        postalCode,
      });

      if (place?.formatted_address) {
        let tData = { address, city, state, country, postalCode };
        valueChange(place.formatted_address, name, tData);
      }
    };

    return (
      <div className={styles.textField}>
        <label htmlFor={name}>
          {label}
          <span
            className={
              sublabel === " (0 characters remaining)"
                ? "text-customRed"
                : "text-customTextGrey2"
            }
          >
            {sublabel}
          </span>
          {required && <span className="text-customRed"> *</span>}
        </label>

        {isAddressField && isLoaded ? (
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={handlePlaceSelect}
            options={{ componentRestrictions: { country: "us" } }} // Restrict to the US
          >
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
              className={
                style
                  ? style +
                    (error ? "border-customRed" : "focus:border-customNavy")
                  : `mt-3 ${
                      customWidth === "ContactInput"
                        ? "xl:w-60 w-full"
                        : " md:w-80 w-full"
                    } hide-arrow text-xs focus:outline-none border-b border-opacity-90 border-customGrey9 ${
                      error ? "border-customRed" : "focus:border-customNavy"
                    }`
              }
              min={type === "number" ? 1 : undefined}
              readOnly={readOnly}
            />
          </Autocomplete>
        ) : (
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
            className={
              style
                ? style +
                  (error ? "border-customRed" : "focus:border-customNavy")
                : `mt-3 ${
                    customWidth === "ContactInput"
                      ? "xl:w-60 w-full"
                      : " md:w-80 w-full"
                  } hide-arrow text-xs focus:outline-none border-b border-opacity-90 border-customGrey9 ${
                    error ? "border-customRed" : "focus:border-customNavy"
                  }`
            }
            min={type === "number" ? 1 : undefined}
            readOnly={readOnly}
          />
        )}

        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

export default TextAddressField;
