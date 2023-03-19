import * as React from 'react';
import Form from './form';
import { IOpps } from './types';

interface IOppsProps {
  opps?: IOpps[];
  customer: any;
}

const Opps: React.FunctionComponent<IOppsProps> = (props) => {
  return (
    <div className="p-4">
        <Form opps={props.opps} customer={props.customer} />
    </div>
  );
};

export default Opps;
