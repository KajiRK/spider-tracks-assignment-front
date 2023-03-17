import axios from '../config/axios';

export interface ICustomer {
    id: string;
    code: string;
    name: string;
    mobile?: string;
    email: string;
    status: string;
}

export const loadCustomers = async () => {
    const { data: customers } = await axios.get('/customers');
    const customersList = await customers.map((customerItem: any) => ({
        id: customerItem._id,
        code: customerItem.code,
        name: customerItem.name,
        mobile: customerItem.mobile,
        email: customerItem.email,
        status: customerItem.status
    }));
    return customersList;
};

export const getCustomer = async (id?: string) => {
    const { data: customer } = await axios.get(`/customers/${id}`);
    const customerData = {
        id: customer._id,
        code: customer.code,
        name: customer.name,
        mobile: customer.mobile,
        email: customer.email,
        status: customer.status
    };
    return customerData;
};

