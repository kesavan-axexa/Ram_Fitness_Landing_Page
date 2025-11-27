import React from "react";

const DotLoader = ({ loading = true }) => {
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {loading && (
        <div className="fixed inset-0 min-h-screen flex items-center justify-center bg-customBlack bg-opacity-70 z-50">
          <div className="flex space-x-3">
            <span
              className={`w-4 h-4 rounded-full ${
                isAdmin ? "bg-customNavy" : "bg-coquelicot"
              } animate-bounce`}
            ></span>

            <span
              className={`w-4 h-4 rounded-full ${
                isAdmin ? "bg-customNavy" : "bg-coquelicot"
              } animate-bounce [animation-delay:0.2s]`}
            ></span>

            <span
              className={`w-4 h-4 rounded-full ${
                isAdmin ? "bg-customNavy" : "bg-coquelicot"
              } animate-bounce [animation-delay:0.4s]`}
            ></span>
          </div>
        </div>
      )}
    </>
  );
};

export default DotLoader;
