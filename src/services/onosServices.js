import axios from "axios";

const apiEndPoint = "";

export const fetchData = async () => {
    try {
        const response = await axios.get(apiEndPoint);
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
