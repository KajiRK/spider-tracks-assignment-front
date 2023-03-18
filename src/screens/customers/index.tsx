import * as React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Breadcrumb from '../../components/Layouts/Breadcrumb';
import { useCustomers } from './hooks';
import Spinner from '../../components/Spinner';

const Customers: React.FunctionComponent = () => {
  const { customers, loading } = useCustomers();

  if (loading) {
    return (
      <Spinner />
    );
  }
  
  return (
    <>
      <Breadcrumb crumb='Customers' />
      <div className="mt-4 flex flex-col mx-auto max-w-7xl">
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
              {customers && customers.length ? (
                customers.map((customer, customerIndex) => (
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
              ) : customers && !customers.length ? (
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
