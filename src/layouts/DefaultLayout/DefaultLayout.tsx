import React from 'react';

import Footer from '~/components/Footer';
import Header from '~/components/Header';

interface DefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default DefaultLayout;
