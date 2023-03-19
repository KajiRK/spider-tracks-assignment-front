import * as React from 'react';
import moment from 'moment';
import classnames from 'classnames';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import Breadcrumb from '../../components/Layouts/Breadcrumb';
import { useCustomerView } from './hooks';
import Form from './form';
import Opps from './Opps';
import Status from './status';

const ViewCustomer: React.FunctionComponent = () => {
  const { id: customerId } = useParams<any>();
  const{ customer, loading } = useCustomerView(customerId);
  const [status, setStatus] = React.useState<string>();

  if (loading) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <Breadcrumb crumb='Customer Details' />
      <div className="mt-4 flex flex-col mx-auto max-w-7xl">
        <div className="grid grid-cols-3 gap-4">
          {/* Customer details with update form, and status update process */}
          <div>
            <div className="overflow-hidden bg-white border shadow-0 sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Customer Information | 
                  { status ? ( 
                      <span className={classnames('font-medium', status === 'Lead' ? 'text-yellow-600' : status === 'Non-Active' ? 'text-red-600' : 'text-green-600')}> {status}</span>   
                  ) : (
                    <span className={classnames('font-medium', customer?.status === 'Lead' ? 'text-yellow-600' : customer?.status === 'Non-Active' ? 'text-red-600' : 'text-green-600')}> {customer?.status}</span>
                  )}
                </h3>
                <div className='flex items-center justify-between'>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">Change Values and Click On Update.</p>
                  <div>
                    <Status customer={customer} setStatus={setStatus} />
                  </div>
                </div>
                
              </div>
              <div className="border-t border-gray-200">
                <div className="px-6 py-2"><span className="text-gray-400 text-sm">{customer?.created_at ? `Created on ${moment(customer?.created_at).format('LL')}` : ''}</span></div>
                <Form customer={customer} />
              </div>
            </div>
          </div>
          {/* List of Customer Opps & Create Opp & Update*/}
          <div className="col-span-2">
            <div className="overflow-hidden bg-white border shadow-0 sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Sale Opportunities</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Customer's Sale Opportunities and Stats.</p>
              </div>
              <div className="border-t border-gray-200">
                <Opps opps={customer?.opps} customer={customer} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCustomer;
