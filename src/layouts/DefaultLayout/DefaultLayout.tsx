import { ReactNode } from 'react';
import Lottie from 'lottie-react';

import { Header, Footer } from '~/components';
import lottieFiles from '~assets/images/lottieFiles';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Lottie className="bg-page" animationData={lottieFiles.texture} loop={true} />
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
