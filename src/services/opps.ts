import axios from '../config/axios';

export interface IOpp {
    id: string;
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

