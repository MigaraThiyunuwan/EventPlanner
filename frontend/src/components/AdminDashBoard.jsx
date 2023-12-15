import React from 'react'
import '../App.css'
import NavigatePath from './NavigatePath';
import NavigationBar from './NavigationBar';
import TableComponent from './TableComponent';
import SideBar from './SideBar';
import FooterComponent from'./FooterComponent';

export default function AdminDashBoard() {
  return (
    <div className="app-container">
      <NavigationBar className="NavigationBar" />
      
      <div className="content-container">
        <SideBar className="SideBar" />
        <div className='flex-1 flex-col p-3'>
          <NavigatePath/>
        <TableComponent className="TableComponent" />
        </div>
        
      </div>
      <FooterComponent/>
    </div>
  )
}
