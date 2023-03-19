import * as React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IStatusProps {
    customer?: any;
    setCustomerData: any;
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
        
       
        setShowModal(false);
    };

    return (
        <>
            <Link 
                to='' 
                className="inline-flex justify-center rounded-md bg-yellow-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" 
                onClick={() => setShowModal(true)}
                >
                    <svg className="-ml-0.5 mr-1.5 h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"></path>
                    </svg>

                    Change Status
            </Link>
            {showModal ? (
                <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-1/2 my-6 mx-auto max-w-6xl">
                                {/*content*/}
                                <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-base font-semibold leading-6 text-gray-900">Update Opportunity</h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Change Name or Status and click on Update.</p>
                                    </div>

                                    {/*body*/}
                                    <div className="border-t border-gray-200">
                                        
                                    </div>

                                    {/*footer*/}
                                    <div className="bg-gray-100 px-4 py-3 relative flex h-16 items-center justify-between sm:px-6">
                                        <button
                                            className="inline-flex justify-center rounded-md bg-gray-800 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <svg className="ml-0.5 mr-1.5 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
                                            Close
                                        </button>
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
