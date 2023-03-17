import * as React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/layouts/Breadcrumb';
import { useCustomers } from './hooks';

const Customers: React.FunctionComponent = () => {
  const { customers } = useCustomers();

  return (
    <>
      <Breadcrumb crumb='Customers' />
      <div className="mt-4 flex flex-col mx-auto max-w-7xl">
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-400 dark:text-gray-700">
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
                  <tr key={customerIndex} className="bg-white border-b dark:bg-gray-100 dark:border-gray-200">
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
                      <td className="px-6 py-4">
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
