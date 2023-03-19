import React from 'react';
import { getCustomer, ICustomer, loadCustomers } from '../../services/customers';
import { ICustomerHook, ICustomerViewHook } from './types';

export const useCustomers = (): ICustomerHook => {

    const [loading, setLoading] = React.useState<boolean>(true);
    const [customers, setCustomers] = React.useState<ICustomer[]>([]);

    const onLoadCustomers = React.useCallback(async () => {
        try {
            setLoading(true);
            setCustomers(await loadCustomers());
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, []);

    React.useEffect(() => {
        onLoadCustomers();
    }, [onLoadCustomers]);

    return { customers, loading };
};

export const useCustomerView = (customerId?: string): ICustomerViewHook => {

    const [loading, setLoading] = React.useState<boolean>(true);
    const [customer, setCustomer] = React.useState<ICustomer | undefined>();

    const onGetCustomer = React.useCallback(async () => {
        try {
            setLoading(true);
            setCustomer(await getCustomer(customerId));
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, []);

    React.useEffect(() => {
        onGetCustomer();
    }, [onGetCustomer]);

    return { customer, loading };
}