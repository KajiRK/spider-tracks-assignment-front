import React from 'react';
import { getCustomer, ICustomer, loadCustomers } from '../../services/customers';
import { ICustomerHook, ICustomerViewHook } from './types';

export const useCustomers = (): ICustomerHook => {

    const [customers, setCustomers] = React.useState<ICustomer[]>([]);

    const onLoadCustomers = React.useCallback(async () => {
        try {
            setCustomers(await loadCustomers());
        } catch (error) {
            console.log(error);
        }
    }, []);

    React.useEffect(() => {
        onLoadCustomers();
    }, [onLoadCustomers]);

    return { customers };
};

export const useCustomerView = (customerId?: string): ICustomerViewHook => {

    const [customer, setCustomer] = React.useState<ICustomer | undefined>(undefined);

    const onGetCustomer = React.useCallback(async () => {
        try {
            setCustomer(await getCustomer(customerId));
        } catch (error) {
            console.log(error);
        }
    }, []);

    React.useEffect(() => {
        onGetCustomer();
    }, [onGetCustomer]);

    return { customer };
}