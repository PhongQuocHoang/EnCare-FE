import axios from 'axios';
const Api_url = `https://enclave-encare.herokuapp.com/api`;

export default async function callApi(endpoit = '', method = 'post', body) {
    return await axios({
        baseURL: `${Api_url}/${endpoit}`,
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
    });
}
