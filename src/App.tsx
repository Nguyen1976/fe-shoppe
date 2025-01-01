import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route) => {
                    const Page = route.element;
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<Page />}
                        />
                    );
                })}
                {privateRoutes.map((route) => {
                    const Page = route.element;
                    const requiredRole = route.requiredRole as 'user' | 'admin';
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <ProtectedRoute requiredRole={requiredRole}>
                                    <Page />
                                </ProtectedRoute>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
};

export default App;
