import React from 'react'
import ToggleModal01 from '../ToggleModal01'
import { Button } from 'flowbite-react';

const TableRow = ({ data }) => {

    return (

        <tr className="border-b-200 border-blue-600">

            <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                {data.orderDate}
            </td>
            <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                {data.orderStatus}
            </td>
            <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                {/* {data.RequestedPackages.map((services, index) => (
                    <div key={index}>
                        {services}
                    </div>
                ))} */}
                {/* {data.RequestedPackages} */}
                {data.customer}

            </td>
            <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                {data.total}
            </td>
            <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                <div className='btncontainer'>
                    {(data.orderStatus !== "Rejected" && data.orderStatus !== "Accepted") && (
                        <ToggleModal01 message="Confirm to Accept or Reject the Order?" orderID={data.orderID} orderDate={data.orderDate} customerID={data.customer} total={data.total}  btnName="Action" closeBtn="Accept" cancelBtn="Reject" size="xs"> </ToggleModal01>
                    )}
                    {(data.orderStatus == "Rejected") && (

                        < Button size="xs" color="failure">{data.orderStatus}</Button>

                    )}
                    {(data.orderStatus == "Accepted") && (

                        < Button size="xs" color="blue">{data.orderStatus}</Button>

                    )}

                </div>
            </td>
        </tr >

    )
}

export default TableRow;
