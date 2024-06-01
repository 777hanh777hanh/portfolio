import { Fragment, ReactNode } from 'react';
import { Route } from 'react-router-dom';
import { DefaultLayout } from '~layouts/DefaultLayout';

interface RouteProps {
    path: string;
    component?: React.FC<{ children: ReactNode }> | null | undefined;
    layout?: React.FC<{ children: ReactNode }> | null | undefined;
    children?: RouteProps[] | null | undefined;
}

type LayoutProps = ({ children }: { children: ReactNode }) => ReactNode;

const renderRoutes = (routes: RouteProps[] | null | undefined) => {
    if (Array.isArray(routes)) {
        return routes.map((route, index) => {
            const Page = route.component || Fragment;

            let Layout: LayoutProps = DefaultLayout;
            if (route.layout) {
                Layout = route.layout;
            } else if (route.layout === null) {
                Layout = Fragment;
            }

            return (
                <Route
                    key={index}
                    path={route.path}
                    element={
                        <Layout>
                            <Page children={undefined} />
                        </Layout>
                    }
                >
                    {route.children && renderRoutes(route.children)}
                </Route>
            );
        });
    }
    return null;
};

export default renderRoutes;
