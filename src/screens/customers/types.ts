import { ICustomer } from "../../services/customers";

export interface ICustomerHook {
    customers: ICustomer[];
}

export interface ICustomerViewHook {
    customer?: ICustomer;
}