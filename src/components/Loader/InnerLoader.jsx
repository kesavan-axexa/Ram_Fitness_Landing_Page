import React from "react";

const InnerLoader = ({ loading }) => {
    return <>{loading ? <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div> : null}</>;
};

export default InnerLoader;
