import { getApps } from "../services/appsService";

export const appsLoader = async (limit = "unlimited") => {
    const apps = await getApps(limit);

    if (!apps || (Array.isArray(apps) && apps.length === 0)) {
        throw new Response("Apps not found", { status: 404 });
    }

    return apps;
};

export const appsDetailsLoader = async ({ params }) => {
    const apps = await getApps();
    const {appId} = params;
    const appDetails = apps.find(app => app.id === parseInt(appId));
    
    if (!appDetails) {
        throw new Response("App not found", { status: 404 });
    }

    return appDetails;

}