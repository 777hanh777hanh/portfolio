import React from 'react';
import { HomePage } from '~/pages';

const routes = {
    home: '/',
    about: '/about',
    project: '/project',
    resume: '/resume',
};

type RoutesProps = {
    path: string;
    component?: React.FC<{ children: React.ReactNode }> | null | undefined;
    layout?: React.FC<{ children: React.ReactNode }> | null | undefined;
    children?: RoutesProps[] | null | undefined;
    exact?: boolean;
    redirect?: string;
};

const publicRoutes: RoutesProps[] = [
    {
        path: routes.home,
        component: HomePage,
    },
    {
        path: `${routes.home}/index.html`,
        component: HomePage,
    },
    // ...
];

// privateRoutes

export { routes, publicRoutes };
