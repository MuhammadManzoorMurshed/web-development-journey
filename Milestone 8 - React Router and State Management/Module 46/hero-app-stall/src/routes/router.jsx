import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/home/Home';
import AllApps from '../pages/all-apps/AllApps';
import InstalledApps from '../pages/installed-apps/InstalledApps';
import TodoList from '../pages/todo-list/TodoList';
import AppNotFound from '../pages/app-not-found/AppNotFound';
import AppsNotFound from '../pages/apps-not-found/AppsNotFound';
import PageNotFound from '../pages/page-not-found/PageNotFound';
import { appsLoader, appsDetailsLoader } from '../loaders/appsLoader';
import AppLoader from '../components/app-loader/AppLoader';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        errorElement: <PageNotFound />,

        children: [
            {
                index: true,
                Component: Home,
                loader: () => appsLoader(8),
                errorElement: <AppsNotFound />,
            },
            {
                path: '/all-apps',
                Component: AllApps,
                loader: appsLoader,
                errorElement: <AppsNotFound />,
            },
            {
                path: '/installed-apps',
                Component: InstalledApps,
                loader: appsLoader,
                errorElement: <AppsNotFound />,
            },
            {
                path: '/todo-list/:appId',
                Component: TodoList,
                loader: appsDetailsLoader,
                errorElement: <AppNotFound />,
            },
            // {
            //     path: '/anf',
            //     Component: AppNotFound,
            // },
            // {
            //     path: '/pnf',
            //     Component: PageNotFound,
            // },
            {
                path: '/al',
                Component: AppLoader
            }
        ]
    }
])

export default router;