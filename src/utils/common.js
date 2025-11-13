import CryptoJS from "crypto-js";
// import { APPCONFIG } from "../src/Config/AppConfig";
// const SECRET_KEY = import.meta.env.VITE_APP_SECRET_KEY_KEY;

export const isNotEmpty = (obj) => obj && Object.keys(obj).length;
export const isNotEmptyArray = (array) => {
  return Array.isArray(array) && array.length > 0;
};
export const isNotEmptyValue = (obj) => obj && Object.keys(obj).length > 0;
export const isEmpty = (value) => {
  // Check for null, undefined, or empty string
  if (value === null || value === undefined || value === "") {
    return true;
  }

  // Check for empty array
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  // Check for empty object
  if (typeof value === "object" && !Array.isArray(value)) {
    return Object.keys(value).length === 0;
  }

  // If none of the above, value is not empty
  return false;
};
// export const decryptData = (name) => {
//   const encrypted = localStorage.getItem(name);
//   if (isNotEmpty(encrypted)) {
//     const decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY).toString(
//       CryptoJS.enc.Utf8
//     );
//     return JSON.parse(decrypted);
//   }
//   return null;
// };

export const privilegeCheck = (requiredRole) => {
  // const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const userDetails = decryptData("userDetails");
  return userDetails?.role === requiredRole;
};

export const validateMobileNumber = (mobileNumber) => {
  // const regex = /^[0-9,\-\s\(\)]+$/;
  const regex =
    /^[0-9,\-\s\(\)]*$/.test(mobileNumber) && mobileNumber.length <= 16;
  return regex;
};

export const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export function validateJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
export const formatDate = (date) => {
  if (!date) return "-";
  return new Date(date).toLocaleDateString("en-GB"); // dd/mm/yyyy
};

export const convertStringToDate = (dateString) => {
  // Split the string into day, month, and year
  const [day, month, year] = dateString.split("/").map(Number);
  // Create a new Date object (month is 0-indexed in JavaScript)
  return new Date(year, month - 1, day);
  // return new Date(day,month -1,year);
};
export function formatDateMonth(dateString) {
  const date = new Date(dateString); // Parse the ISO date string
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
// export const mapRoleToLabel = (roleValue) => {
//   const role = APPCONFIG.rolesList.find((item) => item.value === roleValue);
//   return role ? role.label : roleValue; // Fallback to the original value if not found
// };

export const validateOnChangeEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!email) {
    return "Please enter email address.";
  } else if (!emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }
  
  return "";
};

export const validateOnChangeMobileNumber = (mobileNumber) => {
  const mobileNumberRegex = /^[\d\-\(\)\s]{10,16}$/;
  if (!mobileNumber) {
    return "Please enter mobile number.";
  } else if (!mobileNumberRegex.test(mobileNumber)) {
    return "Please enter a valid mobile number.";
  } else if (mobileNumber.length > 10) {
    return "Mobile Number should not exceed 10 characters.";
  }
  return "";
};

// utils.js
export const getOrderStatusText = (status) => {
  const statusTextMap = {
    JOB_COMPLETED: "Installation Completed",
    ASSIGNED: "Installation Assigned",
    RE_SCHEDULED: "Rescheduled Installation",
    RE_ASSIGNED: "Reassigned Installation",
    ON_THE_WAY: "Installation On the Way",
    ARRIVED_LOCATION: "Installation Arrived",
    JOB_STARTED: "Job Started",
    SCHEDULED: "Reschedule Installation",
  };

  return statusTextMap[status] || "Schedule Installation";
};

export const getOrderStatusContent = (status) => {
  const statusTextMap = {
    JOB_COMPLETED: "Installation Completed",
    ASSIGNED: "Installation Assigned",
    RE_SCHEDULED: "Rescheduled Installation",
    RE_ASSIGNED: "Reassigned Installation",
    ON_THE_WAY: "Installation On the Way",
    ARRIVED_LOCATION: "Installation Arrived",
    JOB_STARTED: "Job Started",
    SCHEDULED: "Scheduled",
  };

  return statusTextMap[status] || "Not Scheduled";
};

export const getOrderStatusTextColor = (status, deliveryOption, isScheduleEmpty) => {
  if (deliveryOption === "DELIVERY_INSTALLATION" && isScheduleEmpty) {
    return "text-customRed";
  }

  const statusClassMap = {
    SCHEDULED: "text-customGreen",
    RE_SCHEDULED: "text-customGreen",
    ASSIGNED: "text-customBlue",
    ARRIVED_LOCATION: "text-customBlue",
    JOB_COMPLETED: "text-customGreen",
    JOB_STARTED: "text-customBlue1",
  };

  return statusClassMap[status] || "text-customRed";
};

export const getOrderStatusClass = (status, disableReschedule) => {
  if (disableReschedule) return "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none";

  const statusClassMap = {
    JOB_COMPLETED: "bg-customGreen text-white ",
    ASSIGNED: "bg-blue-500 text-white ",
    RE_SCHEDULED: "bg-customRed text-white  ",
    RE_ASSIGNED: "bg-customBlue text-white ",
    ON_THE_WAY: "bg-blue-500 text-white ",
    ARRIVED_LOCATION: "bg-customBlue text-white ",
    JOB_STARTED: "bg-customBlue1 text-white ",
    SCHEDULED: "bg-customRed text-white ",
  };

  return statusClassMap[status] || "bg-customRed text-white ";
};

export const getScheduleText = (status)=> {
  if (status == null) return "Schedule";

  switch (status) {
    case "RE_SCHEDULED":
      return "Rescheduled"
    case "SCHEDULED":
      return "Reschedule";
    case "JOB_COMPLETED":
      return "Completed";
    case "ASSIGNED":
      return "Assigned";
    case "RE_ASSIGNED":
      return "Re Assigned";
    case "ON_THE_WAY":
      return "On the Way";
    case "ARRIVED_LOCATION":
      return "Arrived";
    case "JOB_STARTED":
      return "Started";
    default:
      return "";
  }
}
export const getOrderStatus = (status) => {
  switch (status) {
    case "PAYMENT_PENDING":
      return "Payment Pending";
    case "PAYMENT_PROCESSING":
      return "Payment Processing";
    case "PAYMENT_FAILED":
      return "Payment Failed";
    case "ORDERED":
      return "Ordered";
    case "SHIPPED":
      return "Shipped";
    case "DELIVERED":
      return "Delivered";
    case "CANCELLED":
      return "Cancelled";
    case "REFUNDED":
      return "Refunded";
    default:
      return "-"; // Handle unexpected values
  }
};

export const getSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 4;
    if (width >= 768) return 3;
    if (width >= 640) return 2;
    return 1;
  };

  export const getCostumeSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 6;
    if (width >= 768) return 4;
    if (width >= 640) return 2;
    return 1;
  };