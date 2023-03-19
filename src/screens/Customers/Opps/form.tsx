import * as React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Table from './table';
import { createOpp } from '../../../services/opps';
import { IOpps } from './types';
import { ICustomer } from '../../../services/customers';

interface IOppFormProps {
    opps?: IOpps[];
    customer: ICustomer;
}

const OppForm: React.FunctionComponent<IOppFormProps> = (props) => {
    const [oppData, setOppData] = React.useState<any>(props.opps);

    const schema = yup.object({
        name: yup.string().required('Name field is required'),
        status: yup.string().required('Status field is required')
    }).required();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            status: ''
        }
    });

    const onSubmit = async (data: any) => {
        console.log(data);
        const {resData} = await createOpp(props.customer?.id, data);
        setOppData([...oppData, resData]);
        reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="overflow-hidden border">
                    <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-4 sm:col-span-4">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Opportunity Name
                            </label>
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
                    <div className="bg-gray-100 px-4 py-3 text-right sm:px-6">
                        <button type="submit" className="inline-flex justify-center rounded-md bg-green-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">
                            <svg className="-ml-0.5 mr-1.5 h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Add Opp
                        </button>
                    </div>
                </div>
            </form>
            <Table opps={oppData} setOppData={setOppData} customer={props.customer} />
        </>
    );
};

export default OppForm;
