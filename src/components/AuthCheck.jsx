import { Navigate } from 'react-router-dom';

export default function AuthCheck({ user, children }) {
  if (!user) {
    return <Navigate to="/auth" />;
  }
  return children;
}
