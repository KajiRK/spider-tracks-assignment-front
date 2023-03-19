import * as React from 'react';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { IOpps } from './types';
import { ICustomer } from '../../../services/customers';
import { IOpp, updateOpp } from '../../../services/opps';

interface IEditProps {
    opps: IOpps[];
    opp: IOpp;
    setOppData: any;
    customer: ICustomer;
}

const Edit: React.FunctionComponent<IEditProps> = (props) => {
    const [parentOppData, setParentOppData] = React.useState<any>(props.opps);
    const [showModal, setShowModal] = React.useState(false);

    // form validation
    const schema = yup.object({
        name: yup.string().required('Name field is required'),
        status: yup.string().required('Status field is required')
    }).required();

    // validation schema resolver and set default values
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            id: props.opp._id,
            name: props.opp.name,
            status: props.opp.status
        }
    });

    const onSubmit = async (data: any) => {
        // service to update opp
        const {resData} = await updateOpp(props.customer.id, props.opp._id, data);

        // process updated opp to refresh parent opps state
        const updatedOpps = parentOppData.map((oppItem: any) => {
            if(resData.id == oppItem._id){
                return {...oppItem, name: data.name, status: data.status}
            }
            return oppItem;
        });

        // refresh parent state with updated opp details
        props.setOppData(updatedOpps);
        setShowModal(false);
    };

    return (
        <>
            <Link to='' className="text-blue-500" onClick={() => setShowModal(true)}>{props.opp.name}</Link>
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
                                        <div className="bg-white px-4 py-5 sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-4 sm:col-span-4">
                                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Opportunity Name
                                                </label>
                                                <input {...register("id")} type="hidden" placeholder="opportunity name" className="form-input mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                <input {...register("name")} placeholder="opportunity name" className="form-input mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                <p className="text-red-600 text-sm mt-2">{errors.name?.message}</p>
                                            </div>

                                            <div className="col-span-2 sm:col-span-2">
                                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Stats</label>
                                                <select {...register("status")} className="form-select mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                    <option>New</option>
                                                    <option>Closed Won</option>
                                                    <option>Closed Lost</option>
                                                </select>
                                                <p className="text-red-600 text-sm mt-2">{errors.status?.message}</p>
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

export default Edit;
