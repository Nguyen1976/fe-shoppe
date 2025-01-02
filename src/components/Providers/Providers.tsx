import React from 'react';
import { Provider } from 'react-redux';
import LoadingProvider from '~/context/LoadingProvider';
import { store } from '~/redux/store';

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <LoadingProvider>{children}</LoadingProvider>
        </Provider>
    );
};

export default Providers;
