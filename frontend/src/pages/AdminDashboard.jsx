import React from 'react'
import '../css/style.css'
import NavigatePath from '../components/NavigatePath'
import NavigationBar from '../components/NavigationBar'
import SideBar from '../components/SideBar'
import TableComponent from '../components/TableComponent'
import FooterComponent from '../components/FooterComponent'
import NewNav from '../components/NewNav'

function AdminDashboard() {
  return (
    <div className="app-container">
      <NewNav/>
      
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

export default AdminDashboard
