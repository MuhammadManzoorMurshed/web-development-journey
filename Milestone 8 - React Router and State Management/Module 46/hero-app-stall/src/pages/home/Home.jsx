import React, { Suspense } from 'react';
import Hero from '../../components/hero/Hero';
import Banner from '../../components/hero/Banner';
import TrendingApps from '../../components/trending-apps/TrendingApps';
import { useLoaderData } from 'react-router';
import AppLoader from '../../components/app-loader/AppLoader';
import { sleep } from '../../utils/sleep';

const Home = () => {
    const appsData = useLoaderData();

    return (
        <div>
            <Hero/>
            <Banner/>
            <Suspense fallback={<AppLoader />}>
                {
                    sleep(2000)
                }
                <TrendingApps appsData={appsData} />
            </Suspense>
        </div>
    );
};

export default Home;