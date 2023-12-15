import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import React from 'react'




export default function SideBar() {
  return (
    <Sidebar aria-label="Sidebar with content separator example" className='SideBar'>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={HiChartPie}>
          Orders
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiViewBoards}>
          Catering
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiInbox}>
          Music
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiArrowSmRight}>
          Decorations
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiShoppingBag}>
          Photography
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiUser}>
          Users
        </Sidebar.Item>
        
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={HiChartPie}>
          Profile
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiArrowSmRight}>
          Log out
        </Sidebar.Item>
        
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  )
}
