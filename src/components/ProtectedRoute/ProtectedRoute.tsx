import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: JSX.Element;
    requiredRole: 'user' | 'admin';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
    requiredRole,
}) => {
    const { accessToken, role } = useSelector((state: RootState) => state.auth);

    if (!accessToken) {
        return <Navigate to="/" />;
    }

    if (requiredRole !== role) {
        return <Navigate to="/" />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;
