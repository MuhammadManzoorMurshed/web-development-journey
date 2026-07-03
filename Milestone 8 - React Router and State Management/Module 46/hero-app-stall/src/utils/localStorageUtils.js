
export const getFromLS = (key) => {
    try {
        const installApps = localStorage.getItem(key);
        return installApps ? JSON.parse(installApps) : [];
    } catch (err) {
        console.error("Error retrieving data from Local Storage: ", err);
        return [];
    }
}

export const setToLS = appId => {
    const installedApps = getFromLS("installedApps") || [];
    const totalInstalledApps = [...installedApps, appId];
    console.log(totalInstalledApps);

    try {
        localStorage.setItem("installedApps", JSON.stringify(totalInstalledApps));
    } catch(err) {
        console.error("Error saving to Local Storage: ", err);
    }
}

export const deleteFromLS = appId => {
    const allInstalledApps = getFromLS("installedApps");

    const remainingInstalledApps = allInstalledApps.filter(app => {
        return app !== appId;
    })
    localStorage.setItem("installedApps", JSON.stringify(remainingInstalledApps));
}