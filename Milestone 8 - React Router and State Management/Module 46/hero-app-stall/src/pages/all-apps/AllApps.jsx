import React, { useState } from 'react';
import TrendingApp from '../../components/trending-apps/trending-app/TrendingApp';
import BodyHeader from '../../components/body-header/BodyHeader';
import AppsFound from '../../components/apps-found/AppsFound';
import { useLoaderData } from 'react-router';
import AppNotFound from '../app-not-found/AppNotFound';

const AllApps = () => {
    const title = "Our All Applications";
    const description = "Explore All Apps on the Market developed by us. We code for Millions"
    const appsData = useLoaderData();
    const [apps, setApps] = useState(appsData);

    const handleSearch = (searchedTitle) => {
        // console.log(title);
        if (searchedTitle === "") {
            setApps(appsData);
        } else {
            const searchedApps = appsData.filter(app => {
                return app.title.toLowerCase().includes(searchedTitle.toLowerCase());
            })

            setApps(searchedApps);
        }
        // console.log("SA: ", searchedApps);

    }

    const appsCount = apps.length;

    return (
            <div className='bg-[#f5f5f5] py-20'>
                <div className='max-w-360 mx-auto'>
                    <BodyHeader title={title} description={description} />
                    <AppsFound type={"search"} totalApps={appsCount} handleSearch={handleSearch} />

                    {appsCount === 0 && <AppNotFound navbar={false} />}

                    <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center sm:p-4'>
                        {
                            apps.map(app => (
                                <TrendingApp key={app.id} app={app} />
                            ))
                        }
                    </div>
                </div>
            </div>
    );
};

export default AllApps;