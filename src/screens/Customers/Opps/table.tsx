import * as React from 'react';
import { Link } from 'react-router-dom';
import Edit from './edit';
import { IOpps } from './types';

interface IOppTableProps {
    opps: IOpps[];
    setOppData: any;
}

const OppTable: React.FunctionComponent<IOppTableProps> = (props) => {
    return (
        <div className="mt-4 flex flex-col mx-auto max-w-7xl">
            <table className="w-full text-sm text-left text-gray-600 border">
                <thead className="text-sm text-gray-800 uppercase border-b bg-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        Name
                        </th>
                        <th scope="col" className="px-6 py-3 w-1/4">
                        Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.opps && props.opps.length ? (
                        props.opps.map((opp:any, customerIndex: number) => (
                        <tr key={customerIndex} className="bg-white border-b">
                            <td className="px-6 py-4">
                                <Edit opps={props.opps} opp={opp} setOppData={props.setOppData}/>
                            </td>
                            <td className="px-6 py-4">
                                {opp.status}
                            </td>
                        </tr>
                        ))
                    ) : props.opps && !props.opps.length ? (
                        <tr>
                            <td className="px-6 py-4">Opps Not Found</td>
                        </tr> 
                    ) : null }
                    
                </tbody>
            </table>
        </div>
    );
};

export default OppTable;
