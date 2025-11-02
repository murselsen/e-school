import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRole = ({ allowed, redirectTo = "/", children }) => {
  const location = useLocation();
  const { token, user } = useSelector((state) => state.auth);

  // Token yoksa login'e yönlendir
  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Kullanıcı bilgisi yüklenirken sabret (null role yüzünden yanlış yönlenmeyi önle)
  const isLoadingUser = !user || user.role == null;
  if (isLoadingUser) {
    return <div>Yükleniyor...</div>;
  }

  const allowedRoles = Array.isArray(allowed) ? allowed : [allowed];
  const hasAccess = allowedRoles.includes(user.role);

  if (!hasAccess) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

export default ProtectedRole;
