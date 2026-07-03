import axios from "axios";

export const getApps = async (limit) => {
    const res = await axios.get("/appsData.json");

    if(limit === 8) {
        return res.data.slice(0, 8);
    }

    return res.data;
};