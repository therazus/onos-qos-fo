import axios from "axios";

const apiEndPoint = "http://localhost:8181/onos/QoS-app/api/getQueue";
const username = 'onos';
const password = 'rocks';

const basicAuth = btoa(`${username}:${password}`);

export const fetchData = async () => {
    try {
        const response = await axios.get(apiEndPoint, {
            headers: {
                'Authorization': `Basic ${basicAuth}`,
                'Content-Type': 'application/json',
            },
        });

        console.log("Data aawa cuuda. Mewa hari carala dewal.", response.data);
        return response.data;
    } catch {
        console.log("Can not connect to the onos server");
    }
};

export const createData = async (data) => {
    try {
        const response = await axios.post(apiEndPoint, data);
        return response.data;
    } catch {
        console.log("Can not connect to the onos server");
    }
};

export const deleteData = async (id) => {
    try {
        const response = await axios.delete(apiEndPoint, id);
        return response.data;
    } catch {
        console.log("Can not connect to the onos server");
    }
};
