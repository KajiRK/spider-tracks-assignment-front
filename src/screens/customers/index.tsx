import * as React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Breadcrumb from '../../components/Layouts/Breadcrumb';
import { useCustomers } from './hooks';
import Spinner from '../../components/Spinner';
import { ICustomer } from '../../services/customers';

const Customers: React.FunctionComponent = () => {
  const [loadCustomers, setLoadCustomers] = React.useState<ICustomer[]>();
  const { customers, loading } = useCustomers();
  
  React.useEffect(() => {
    setLoadCustomers(customers);
  }, [customers, setLoadCustomers]);

  if (loading) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <Breadcrumb crumb='Customers' />
      <div className="mt-4 flex flex-col mx-auto max-w-7xl">
        <div className="sm:flex sm:space-x-4">
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden border transform transition-all w-full sm:w-1/4 sm:my-8">
                <div className="bg-white p-5">
                    <div className="sm:flex sm:items-start">
                        <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                            <h3 className="text-sm leading-6 text-gray-600 font-medium text-gray-400 uppercase">All Customers</h3>
                            <Link onClick={() => setLoadCustomers(customers)} to={''} className="text-4xl font-semibold text-gray-600">{customers.length}</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden border transform transition-all w-full sm:w-1/4 sm:my-8">
                <div className="bg-white p-5">
                    <div className="sm:flex sm:items-start">
                        <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                            <h3 className="text-sm leading-6 text-gray-600 font-medium text-gray-400 uppercase">Active Customers</h3>
                            <Link onClick={() => setLoadCustomers(customers.filter(cusData => cusData.status === 'Active'))} to={''} className="text-4xl font-semibold text-green-600">{customers.filter(cusData => cusData.status === 'Active').length}</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden border transform transition-all w-full sm:w-1/4 sm:my-8">
                <div className="bg-white p-5">
                    <div className="sm:flex sm:items-start">
                        <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                            <h3 className="text-sm leading-6 text-gray-600 font-medium text-gray-400 uppercase">Non-Active Customers</h3>
                            <Link onClick={() => setLoadCustomers(customers.filter(cusData => cusData.status === 'Non-Active'))} to={''} className="text-4xl font-semibold text-red-600">{customers.filter(cusData => cusData.status === 'Non-Active').length}</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden border transform transition-all w-full sm:w-1/4 sm:my-8">
                <div className="bg-white p-5">
                    <div className="sm:flex sm:items-start">
                        <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                            <h3 className="text-sm leading-6 text-gray-600 font-medium text-gray-400 uppercase">Lead Customers</h3>
                            <Link onClick={() => setLoadCustomers(customers.filter(cusData => cusData.status === 'Lead'))} to={''} className="text-4xl font-semibold text-yellow-600">{customers.filter(cusData => cusData.status === 'Lead').length}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="flex flex-col mx-auto max-w-7xl">
        <table className="w-full text-sm text-left text-gray-600 border">
            <thead className="text-sm text-gray-800 uppercase border-b bg-gray-100">
                <tr>
                    <th scope="col" className="px-6 py-3">
                      Code
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Mobile
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                </tr>
            </thead>
            <tbody>
              {loadCustomers && loadCustomers.length ? (
                loadCustomers.map((customer, customerIndex) => (
                  <tr key={customerIndex} className="bg-white border-b">
                      <td className="px-6 py-4">
                        <Link to={`customers/${customer.id}`} className="text-blue-500">{customer.code}</Link>
                      </td>
                      <td className="px-6 py-4">
                        {customer.name}
                      </td>
                      <td className="px-6 py-4">
                        {customer.email}
                      </td>
                      <td className="px-6 py-4">
                        {customer.mobile ? customer.mobile : 'none'}
                      </td>
                      <td className={classnames('px-6 py-4 font-medium', customer.status === 'Lead' ? 'text-yellow-600' : customer.status === 'Non-Active' ? 'text-red-600' : 'text-green-600')}>
                        {customer.status}
                      </td>
                  </tr>
                ))
              ) : loadCustomers && !loadCustomers.length ? (
                <tr>
                  <td className="px-6 py-4">Customers Not Found</td>
                </tr> 
              ) : null }
            </tbody>
        </table>
      </div>
    </>
  );
};

export default Customers;
