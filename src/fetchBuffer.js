import axios from "axios";

export default async function fetchBuffer(url) {
    const { data } = await axios({
        url,
        responseType: "arraybuffer"
    });

    return Buffer.from(data);
}
