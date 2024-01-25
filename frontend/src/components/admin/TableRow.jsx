import React from 'react'
import ToggleModal01 from '../ToggleModal01'

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
                {data.RequestedPackages}

            </td>
            <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                {data.total}
            </td>
            <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                <div className='btncontainer'>
                    <ToggleModal01 message="Are You Sure to Accept this Order?" btnName="Accept" closeBtn="Confirm" size="xs"> </ToggleModal01>
                    <ToggleModal01 message="Are You Sure to Reject this Order?" btnName="Reject" closeBtn="Confirm" size="xs"> </ToggleModal01>
                </div>
            </td>
        </tr>

    )
}

export default TableRow;
