import { Navigate } from "react-router";

export function RequiresAuth({ children, token }) {
  return token ? children : <Navigate to="/login" />;
}
