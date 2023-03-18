import * as React from 'react';
import { Link } from 'react-router-dom';
import { IForm } from './types';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ICustomer, updateCustomer } from '../../services/customers';

const Form: React.FunctionComponent<IForm> = ({
    customer
}) => {
    const [customerData, setCustomerData] =  React.useState<ICustomer | undefined>(customer);

    const schema = yup.object({
        name: yup.string().required('Name field is required'),
        email: yup.string().required('Email field is required').email('Invalid email'),
        mobile: yup.string().nullable()
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: customerData?.name,
            email: customerData?.email,
            mobile: customerData?.mobile
        }
    });

    const onSubmit = async (data: any) => {
        console.log(data);
        if(!customerData?.id){
            return;
        }
        setCustomerData(await updateCustomer(customerData?.id, data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Code
                            </label>
                            <input
                                value={customer?.code}
                                readOnly
                                type="text"
                                name="code"
                                className="form-input mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <input {...register("name")} className="form-input mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            <p className="text-red-600 text-sm mt-2">{errors.name?.message}</p>
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <input {...register("email")} className="form-input mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            <p className="text-red-600 text-sm mt-2">{errors.email?.message}</p>
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Mobile
                            </label>
                            <input {...register("mobile")} className="form-input mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            <p className="text-red-600 text-sm mt-2">{errors.mobile?.message}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 px-4 py-3 relative flex h-16 items-center justify-between sm:px-6">
                    <Link to="/" className="inline-flex justify-center rounded-md bg-gray-800 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        Back
                    </Link>
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Update
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form;




