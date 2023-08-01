import { Navigate } from "react-router";
import { loginUser } from "services/services.js";

export function RequiresAuth({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" />;
}
