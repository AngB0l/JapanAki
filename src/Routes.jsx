/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingLayout from './layouts/LandingLayout';

const configuredRoutes = [
    {
        exact: true,
        path: '/',
        layout: LandingLayout,
        component: lazy(() => import('./pages/landing')),
    },
    {
        exact: true,
        path: '/documents/:id',
        layout: LandingLayout,
        component: lazy(() => import('./pages/documents/document')),
    },
];

const constructRoutes = (routes) => (
    <Suspense fallback="Loading...">
        <Switch>
            {routes.map((route) => {
                const Layout = route.layout || Fragment;
                const Component = route.component;
                const key = route.path;

                return (
                    <Route
                        key={key}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => (
                            <Layout>
                                {route.routes
                                    ? constructRoutes(route.routes)
                                    : <Component {...props} />}
                            </Layout>
                        )}
                    />
                );
            })}
        </Switch>
    </Suspense>
);

function Routes() {
    return constructRoutes(configuredRoutes);
}

export default Routes;
