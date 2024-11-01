import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contex/useAuth';
import PropTypes from 'prop-types';

export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
