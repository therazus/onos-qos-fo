import axios from "axios";

const username = 'onos';
const password = 'rocks';

const basicAuth = btoa(`${username}:${password}`);

export const fetchData = async () => {
    const apiEndPoint = "https://76be-2402-4000-21c3-404a-1acd-d01f-8efd-20e6.ngrok-free.app/onos/QoS-app/api/getQueue";
    console.log("Fetching data");
    try {
        const response = await axios.get(apiEndPoint, {
            headers: {
                'Authorization': `Basic ${basicAuth}`,
                'Content-Type': 'application/json',
            },
        });

        console.log(response.data);
        return response.data;
    } catch {
        console.log("Can not connect to the onos server");
    }
};

export const createData = async (data) => {
    const apiEndPoint = "https://76be-2402-4000-21c3-404a-1acd-d01f-8efd-20e6.ngrok-free.app/onos/QoS-app/api/updateQueue";
    console.log("Creating data");
    try {
        const response = await axios.post(apiEndPoint, data);
        return response.data;
    } catch {
        console.log("Can not connect to the onos server");
    }
};

export const deleteData = async (id) => {
    const apiEndPoint = "https://76be-2402-4000-21c3-404a-1acd-d01f-8efd-20e6.ngrok-free.app/onos/QoS-app/api/deleteQueue";
    console.log("Deleting data");
    try {
        const response = await axios.delete(apiEndPoint, id);
        return response.data;
    } catch {
        console.log("Can not connect to the onos server");
    }
};


export const getDevices = async () => {
    const apiEndPoint = "https://76be-2402-4000-21c3-404a-1acd-d01f-8efd-20e6.ngrok-free.app/onos/v1/devices";
    console.log("Getting devices");
    try {
        const response = await axios.delete(apiEndPoint);
        const result = response.data.devices[0];

        const data = [
            ['Device Type', result.type],
            ['Device Role', result.role],
            ['Last Update', result.humanReadableLastUpdate],
            ['Channel IP', result.annotations.channelId],
        ];

        console.log(data);

        return data;
    } catch {
        console.log("Can not connect to the onos server");
    }
};
