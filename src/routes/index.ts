// import React from 'react';
import config from '@/configs';
import Home from '@/pages/user/Home';
import SignIn from '@/pages/user/SignIn';
import SignUp from '@/pages/user/SignUp';
import Profile from '@/pages/user/Profile';
import Admin from '@/pages/admin/Admin';

export const publicRoutes= [
    {
        path: config.routes.home,
        element: Home,
    },
    {
        path: config.routes.signIn,
        element: SignIn,
    },
    {
        path: config.routes.signIn,
        element: SignUp,
    },
];

export const privateRoutes = [
    {
        path: config.routes.profile,
        element: Profile,
        requiredRole: 'user',
    },
    {
        path: '/admin',
        element: Admin,
        requiredRole: 'admin',
    },
];
