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
    const [message, setMessage] =  React.useState<string>('');
    const [showMessage, setShowMessage] = React.useState(false);

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
        const {resData, message} = await updateCustomer(customerData?.id, data);
        setCustomerData(resData);
        setMessage(message);
        setShowMessage(true);
        setTimeout(function() {
            setShowMessage(false);
        }, 2000);
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
                    { showMessage ? ( 
                        <>
                            { message && ( 
                                <div className="flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100 " role="alert">
                                    <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                    <div>
                                        {message}
                                    </div>
                                </div>
                            )}
                        </>
                    ): (
                        <div></div>
                    )}
                </div>
                
                <div className="bg-gray-100 px-4 py-3 relative flex h-16 items-center justify-between sm:px-6">
                    <Link to="/" className="inline-flex justify-center rounded-md bg-gray-800 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        <svg className="ml-0.5 mr-1.5 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
                        Back
                    </Link>
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                        Update
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form;




