import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCustomerView } from './hooks';

const ViewCustomer: React.FunctionComponent = () => {

  const { id: customerId } = useParams<any>();
  const{ customer } = useCustomerView(customerId);

  return (
    <>
      <Link to="/">Back</Link>
      <div>{ customer ? customer.name : 'none' }</div>
    </>
  );
};

export default ViewCustomer;
