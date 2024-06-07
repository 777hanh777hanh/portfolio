import { useLayoutEffect, useState } from 'react';
import { Routes } from 'react-router-dom';

import { renderRoutes } from '~/utils';
import { publicRoutes } from '~/routes';
import { Loader } from '~/components';

function App() {
    const [isLoad, setIsLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        const date = new Date();
        date.setSeconds(date.getSeconds() + 10);
        const dateString = date.getTime() / 1000;

        document.cookie = `name=loading; expires=${dateString}`;
    }, []);

    useLayoutEffect(() => {
        function getCookie(cookieName: string) {
            const name = cookieName + '=';
            const decodedCookie = decodeURIComponent(document.cookie);
            const cookieArray = decodedCookie.split(';');
            for (let i = 0; i < cookieArray.length; i++) {
                const cookie = cookieArray[i].trim();
                if (cookie.indexOf(name) == 0) {
                    return cookie.substring(name.length, cookie.length);
                }
            }
            return '';
        }

        function isCookieAlive(cookieName: string) {
            const cookieValue = getCookie(cookieName);
            return cookieValue !== '' && cookieValue !== null;
        }

        function createCookie(cookieName: string) {
            const expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 1); // Thêm 1 ngày
            const expires = 'expires=' + expireDate.toUTCString();
            document.cookie = cookieName + '=true;' + expires + ';path=/';
        }

        if (isCookieAlive('load')) {
            console.log("Cookie 'load' vẫn còn sống.");
            setIsLoading(false);
        } else {
            console.log("Cookie 'load' đã hết hạn hoặc không tồn tại.");
            setIsLoading(true);
            createCookie('load');
        }
    }, []);

    useLayoutEffect(() => {
        const timer = setTimeout(() => {
            setIsLoad(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    });

    return (
        <>
            <div className="App">
                {isLoading && isLoad && <Loader />}
                {(!isLoading || !isLoad) && <Routes>{renderRoutes(publicRoutes)}</Routes>}
            </div>
        </>
    );
}

export default App;
