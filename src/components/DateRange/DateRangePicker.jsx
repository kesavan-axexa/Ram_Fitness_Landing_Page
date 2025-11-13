import React, { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DropdownDateRangeSelector = ({ onRangeChange }) => {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const ref = useRef();
  const [selectingStart, setSelectingStart] = useState(true); // Track if selecting start date

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;

    if (selectingStart) {
      setRange([
        {
          startDate,
          endDate: endDate || startDate, // Ensure end date is set
          key: "selection",
        },
      ]);
      setSelectingStart(false); // Switch to selecting end date
    } else {
      setRange([{ startDate, endDate, key: "selection" }]);
      setOpen(false); // Close dropdown after both dates are selected
      setSelectingStart(true); // Reset state
    }

    onRangeChange && onRangeChange(ranges.selection);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
        setSelectingStart(true); // Reset to selecting start date
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatRange = () => {
    const { startDate, endDate } = range[0];
    return `${format(startDate, "dd/MM/yyyy", { locale: enGB })} - ${format(
      endDate,
      "dd/MM/yyyy",
      { locale: enGB }
    )}`;
  };

  return (
    <div ref={ref} className="relative inline-block">
      <p className="text-[#5A5A5A] mb-2 font-bold text-sm">Choose Date:</p>
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-semibold 
             w-full md:w-60 bg-white shadow-sm 
             focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {formatRange()}
      </button>

      {open && (
        <div 
        className="absolute mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 md:min-w-[200px] min-w-[150px] lg:right-0"
        >
          <DateRange
            editableDateInputs={true}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            ranges={range}
            locale={enGB}
          />
        </div>
      )}
    </div>
  );
};

export default DropdownDateRangeSelector;
