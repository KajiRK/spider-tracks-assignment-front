import { ICustomer } from "../../services/customers";

export interface ICustomerHook {
    customers: ICustomer[];
    loading: boolean;
}

export interface ICustomerViewHook {
    customer?: ICustomer;
    loading: boolean;
}

export interface IForm {
    customer?: ICustomer;
}