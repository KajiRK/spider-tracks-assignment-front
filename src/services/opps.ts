import axios from '../config/axios';

export interface IOpp {
    _id: string;
    name: string;
    status: string;
}

export const createOpp = async (id: string, data: any) => {
    const { data: {data: opp, message} } = await axios.post(`/customers/${id}/opps`, data);
    const resData = {
        id: opp._id,
        name: opp.name,
        status: opp.status
    };
    return {resData, message};
};

export const updateOpp = async (id: string, oppId: string, data: any) => {
    const { data: opp } = await axios.put(`/customers/${id}/opps/${oppId}`, data);
    const resData = {
        id: opp._id,
        name: opp.name,
        status: opp.status
    };
    return {resData};
};

