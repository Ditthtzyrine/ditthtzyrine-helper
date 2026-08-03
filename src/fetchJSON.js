import axios from "axios";

export default async function fetchJSON(url, options = {}) {
    const { data } = await axios({
        url,
        method: options.method || "GET",
        headers: options.headers || {},
        data: options.body || null,
        timeout: 30000
    });

    return data;
}
