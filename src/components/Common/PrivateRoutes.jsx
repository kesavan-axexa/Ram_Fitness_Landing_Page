import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalState } from "../src/pages/shopTIres/GlobalStateContext";

const PrivateRoutes = ({ allowedRoles }) => {
  const user = { role: 'admin' }; 
  const userHasAccess = allowedRoles.includes(user?.role);
  return userHasAccess ? <Outlet /> : <Navigate to="/" />;
};

const SuperAdminRoutes = () => {
  const { userInfoData } = useGlobalState();
  const [userDetails, setUserDetails] = useState(userInfoData);

  useEffect(() => {
    if (!userDetails) {
      setUserDetails(userInfoData)
    }
  }, [userDetails])
  const user = { role: userDetails?.role };

  return user.role === 'Super Admin' ? <Outlet /> : <Navigate to="/admin" />;
};

export { PrivateRoutes, SuperAdminRoutes };
