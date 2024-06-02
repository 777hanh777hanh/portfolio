import { ReactNode } from 'react';
import { Header, Footer } from '~/components';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {/* Header */}
            <Header />

            {/* Main */}
            <main style={{ height: '200dvh', background: '' }}>{children}</main>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default DefaultLayout;
