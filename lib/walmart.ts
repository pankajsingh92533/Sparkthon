import axios, { AxiosResponse } from 'axios';


export const getUrl = async (recipe: string) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://serpapi.com/search?engine=walmart&query=${recipe}&api_key=4002f90660781f3cbf309e83b919bcf74c105de73c3725460088b6ef11c00343`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    };

    const response: AxiosResponse = await axios.request(config);
    if (!response.data.error) {
        return response.data
    }
    else {
        console.log(response.data)
    }

}


