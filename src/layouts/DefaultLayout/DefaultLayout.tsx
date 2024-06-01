import { ReactNode } from 'react';
import { Header, Footer } from '~/components';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {/* Header */}
            <Header />

            {/* Main */}
            <main>{children}</main>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default DefaultLayout;
