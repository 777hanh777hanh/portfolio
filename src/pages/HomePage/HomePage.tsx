import { useEffect } from 'react';
import { updateTitle } from '~/utils';

const HomePage = () => {
    useEffect(() => {
        updateTitle('Home');
    }, []);

    return (
        <>
            <h1>This is Home Page</h1>
        </>
    );
};

export default HomePage;
