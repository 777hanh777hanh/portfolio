import { ReactNode } from 'react';
import { Header, Footer } from '~/components';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {/* Header */}
            <Header />

            {/* Main */}
            <main style={{ minHeight: '90dvh' }}>{children}</main>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default DefaultLayout;
