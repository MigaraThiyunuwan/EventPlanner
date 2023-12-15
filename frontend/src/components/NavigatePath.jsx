import React from 'react'

import { Breadcrumb } from 'flowbite-react';
import { HiUser } from 'react-icons/hi';
export default function NavigatePath() {
  return (
    <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 rounded-md">
      <Breadcrumb.Item href="#" icon={HiUser}>
        Profile
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Orders</Breadcrumb.Item>
      {/* <Breadcrumb.Item>Flowbite React</Breadcrumb.Item> */}
    </Breadcrumb>
  )
}
