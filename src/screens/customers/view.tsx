import * as React from 'react';
import { useParams } from 'react-router-dom';
import classnames from 'classnames';
import Breadcrumb from '../../components/Layouts/Breadcrumb';
import { useCustomerView } from './hooks';
import Form from './form';
import Spinner from '../../components/Spinner';
import Opps from './Opps';

const ViewCustomer: React.FunctionComponent = () => {
  const { id: customerId } = useParams<any>();
  const{ customer, loading } = useCustomerView(customerId);

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
          {/* customer details & update */}
          <div>
            <div className="overflow-hidden bg-white border shadow-0 sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Customer Information | <span className={classnames('font-medium', customer?.status === 'Lead' ? 'text-yellow-600' : customer?.status === 'Non-Active' ? 'text-red-600' : 'text-green-600')}>{customer?.status}</span>
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Change Values and Click On Update.</p>
              </div>
              <div className="border-t border-gray-200">
                <Form customer={customer} />
              </div>
            </div>
          </div>
          {/* Stats & List of Customer Opps */}
          <div className="col-span-2">
            <div className="overflow-hidden bg-white border shadow-0 sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Sale Opportunities</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Customer's Sale Opps and Stats.</p>
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
