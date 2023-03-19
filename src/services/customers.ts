import axios from '../config/axios';

export interface ICustomer {
    id: string;
    code: string;
    name: string;
    mobile?: string;
    email: string;
    status: string;
    opps: [];
    created_at: string;
}

// service to load customers
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

// service to get a specific customer data
export const getCustomer = async (id?: string) => {
    const { data: customer } = await axios.get(`/customers/${id}`);
    const customerData = {
        id: customer._id,
        code: customer.code,
        name: customer.name,
        mobile: customer.mobile,
        email: customer.email,
        status: customer.status,
        opps: customer.opps,
        created_at:customer.createdAt
    };
    return customerData;
};

// service to update customer data 
export const updateCustomer = async (id: string, data: any) => {
    const { data: {data: customer, message} } = await axios.put(`/customers/${id}`, data);
    const resData = {
        id: customer._id,
        code: customer.code,
        name: customer.name,
        mobile: customer.mobile,
        email: customer.email,
        status: customer.status,
        opps: customer.opps,
        created_at:customer.createdAt
    };
    return {resData, message};
};

// service to update only customer status
export const updateCustomerStatus = async (id: string, data: any) => {
    const { data: {data: customer, message} } = await axios.patch(`/customers/${id}/status`, data);
    const resData = {
        id: customer._id,
        code: customer.code,
        name: customer.name,
        mobile: customer.mobile,
        email: customer.email,
        status: customer.status,
        opps: customer.opps,
        created_at:customer.createdAt
    };
    return {resData, message};
};

