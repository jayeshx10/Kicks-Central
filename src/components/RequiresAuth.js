import { Navigate } from "react-router";
import { loginUser } from "services/services.js";

export function RequiresAuth({ children, token }) {
  return token ? children : <Navigate to="/login" />;
}
