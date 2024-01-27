import React from 'react'
import ToggleModal01 from '../ToggleModal01'
const TableRow2  = ({ data }) => {
    return (
        
            <tr className="border-b-200 border-blue-600">

                <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                {data.full_name}
                </td>
                <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                {data.email}
                </td>
                
                <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                    <div className='btncontainer'>
                        <ToggleModal01 btnName="View Message" closeBtn="OK" size="xs">
                            <div className="space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                {data.content}
                                </p>

                            </div>
                        </ToggleModal01>
                    </div>
                </td>

            </tr>
        
    )
}

export default TableRow2
