import { ReactNode } from 'react';
import { Header } from '~/components';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {/* Header */}
            <Header />

            {/* Main */}
            <main>{children}</main>

            {/* Footer */}
        </>
    );
};

export default DefaultLayout;
