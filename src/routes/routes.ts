import React from 'react';
import { HomePage, AboutPage, ProjectPage, ResumePage } from '~/pages';

const routes = {
    home: '/',
    about: '/about',
    project: '/project',
    resume: '/resume',
    source: 'https://github.com/777hanh777hanh/portfolio',
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
    {
        path: `${routes.about}`,
        component: AboutPage,
    },
    {
        path: `${routes.project}`,
        component: ProjectPage,
    },
    {
        path: `${routes.resume}`,
        component: ResumePage,
    },
    // ...
];

// privateRoutes

export { routes, publicRoutes };
