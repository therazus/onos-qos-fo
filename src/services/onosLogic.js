import axios from "axios";
import {createData, deleteData, fetchData} from "./onosServices";

export const fetchDataLogic = async () => {
    const result = await fetchData();
    return result;
};

export const createDataLogic = async (name, max, min) => {
    const data = {"name": name, "max": max, "min": min}
    const result = await createData(data);
    return result;
};

export const deleteDataLogic = async (name) => {
    const result = await deleteData(name);
};
