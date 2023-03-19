import * as React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import classnames from 'classnames';
import { updateCustomerStatus } from '../../services/customers';

interface IStatusProps {
    customer?: any;
    setStatus: any;
}

const Status: React.FunctionComponent<IStatusProps> = (props) => {
    const [showModal, setShowModal] = React.useState(false);

    const schema = yup.object({
        status: yup.string().required('Status field is required')
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            status: props.customer.status
        }
    });

    const onSubmit = async (data: any) => {
        await updateCustomerStatus(props.customer.id, data);
        props.setStatus(data.status);
        setShowModal(false);
    };

    return (
        <>
            <Link to='' className="text-blue-500 mt-1 max-w-2xl text-sm" onClick={() => setShowModal(true)}>Update Status</Link>
            {showModal ? (
                <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-1/2 my-6 mx-auto max-w-6xl">
                                {/*content*/}
                                <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-base font-semibold leading-6 text-gray-900">Update Customer Status</h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Current status of customer is <span className={classnames('font-medium', props.customer.status === 'Lead' ? 'text-yellow-600' : props.customer.status === 'Non-Active' ? 'text-red-600' : 'text-green-600')}>{props.customer.status}</span>.</p>
                                    </div>
                                    {/*body*/}
                                    <div className="border-t border-gray-200">
                                        <div className="overflow-hidden border m-4">
                                            <div className="bg-white px-4 py-5 sm:p-6">
                                                <div className="flex">
                                                    <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                                                        <input
                                                            className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 dark:border-neutral-600 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary dark:checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary dark:checked:after:border-primary dark:checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary dark:checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                                            type="radio"
                                                            id="inlineRadio1"
                                                            value="Active" 
                                                            {...register("status")}/>
                                                        <label className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-sm font-medium">Active</label>
                                                    </div>
                                                    <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                                                        <input
                                                            className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 dark:border-neutral-600 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary dark:checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary dark:checked:after:border-primary dark:checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary dark:checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                                            type="radio"
                                                            id="inlineRadio2"
                                                            value="Non-Active"
                                                            {...register("status")}/>
                                                        <label className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-sm font-medium">Non-Active</label>
                                                    </div>
                                                    <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                                                        <input
                                                            className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 dark:border-neutral-600 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary dark:checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary dark:checked:after:border-primary dark:checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary dark:checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                                            type="radio"
                                                            id="inlineRadio3"
                                                            value="Lead"
                                                            {...register("status")}/>
                                                        <label className="hover:cursor-pointer text-sm font-medium">Lead</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="bg-gray-100 px-4 py-3 relative flex h-16 items-center justify-between sm:px-6">
                                        <button
                                            className="inline-flex justify-center rounded-md bg-gray-800 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <svg className="ml-0.5 mr-1.5 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                            Close
                                        </button>
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                        >
                                            <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path stroke-width="2" fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                            </svg>
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </form>
                </>
            ) : null}
        </>
    );
};

export default Status;
