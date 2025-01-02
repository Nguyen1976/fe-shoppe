import React from 'react';
import Footer from '~/components/Footer';

interface FooterLayoutProps {
    children: React.ReactNode;
}

const FooterLayout: React.FC<FooterLayoutProps> = ({ children }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
}

export default FooterLayout;
