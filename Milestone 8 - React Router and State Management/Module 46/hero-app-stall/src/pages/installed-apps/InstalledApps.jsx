import React, { useState } from 'react';
import InstalledApp from '../../components/installed-app/InstalledApp';
import BodyHeader from '../../components/body-header/BodyHeader';
import AppsFound from '../../components/apps-found/AppsFound';
import { useLoaderData } from 'react-router';
import { deleteFromLS, getFromLS } from '../../utils/localStorageUtils';

const InstalledApps = () => {
    const title = "Your Installed Apps";
    const description = "Explore All Trending Apps on the Market developed by us"

    const appsData = useLoaderData();
    const installedApps = getFromLS("installedApps");
    const totalInstalledApps = appsData.filter(app => {
        return installedApps.includes(app.id);
    });

    const [apps, setApps] = useState(totalInstalledApps);

    const handleSort = (type) => {
        console.log(type)
        switch (type) {
            case "asc": {
                const ascendingSortedApps = [...apps].sort((a, b) => a.downloads - b.downloads);
                setApps(ascendingSortedApps);
                break;
            }
            case "dsc": {
                const descendingSortedApps = [...apps].sort((a, b) => b.downloads - a.downloads);
                setApps(descendingSortedApps);
                break;
            }
            default:
                break;
        }
    }

    const handleSetChange = id => {
        deleteFromLS(id);
        const updatedInstalledIds = getFromLS("installedApps");
        const updatedApps = appsData.filter(app => updatedInstalledIds.includes(app.id));
        setApps(updatedApps);
    }

    return (
        <div className='bg-[#f5f5f5] py-20'>
            <div className='max-w-360 mx-auto'>

                <BodyHeader title={title} description={description} />

                <AppsFound type={"sort"} totalApps={apps.length} handleSort={handleSort} />

                <div className='space-y-4'>
                    {
                        apps.map(installedApp => (
                            <InstalledApp key={installedApp.id} installedApp={installedApp} handleSetChange={handleSetChange} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;