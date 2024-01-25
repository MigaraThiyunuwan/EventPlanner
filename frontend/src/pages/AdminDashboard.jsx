import React, { useEffect } from 'react'
import '../css/style.css'
import { Card, Button, Label, TextInput, Table } from "flowbite-react";
import { useState } from "react";
import UserPhoto from "../images/User.jpg";
import NavigatePath from '../components/NavigatePath'
import NewNav from '../components/NewNav'
import Footer from '../components/Footer'
import ToggleModal01 from '../components/ToggleModal01'
import axios from 'axios';
import orderTableData from '../data/orderTableData';
import TableRow from '../components/admin/TableRow';


const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("accountDetails");

  const [OrderData, setOrderData] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    try {
      const result = await axios.get("http://localhost:8000/order-details/");
      setOrderData(result.data);
      console.log(result);
    } catch (error) {

    }
  }
  const handleStatusChange = (orderID, newStatus) => {
    setOrderData(prevOrderData =>
      prevOrderData.map(order =>
        order.orderID === orderID ? { ...order, orderStatus: newStatus } : order
      )
    );
  };


  return (
    <>
      <NewNav />
      {/*main section*/}
      <section className="mt-12 mb-16 mx-4 grid grid-cols-1 gap-2 md:grid-cols-4 lg:grid-cols-4">
        <div className="private items-center h-full col-span-1 md:col-span-1">
          <Card className="private text-center max-w-sm w-full md:max-w-full mx-auto">
            <img
              alt="Bonnie image"
              height="100"
              src={UserPhoto}
              width="100"
              className="mb-3 rounded-full shadow-lg mx-auto"
            />
            <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
              Migara Thiyunuwan
            </h5>

            {/* Edit Profile Picture Button */}
            <section className=" picturebtn flex justify-center mt-2 mb-10">
              <a href='adminprofile'>
                <Button className="w-[150px] md:w-[170px] rounded-lg bg-primary uppercase text-white hover:!bg-secondary">
                  Back to Profile
                </Button>
              </a>
              <a href='managepackages'>
                <Button className="w-[150px] md:w-[170px] rounded-lg bg-primary uppercase text-white hover:!bg-secondary">
                  Packages
                </Button>
              </a>
              <a href='adminmessages'>
                <Button className="w-[150px] md:w-[170px] rounded-lg bg-primary uppercase text-white hover:!bg-secondary">
                  Messages
                </Button>
              </a>
            </section>
          </Card>
        </div>

        <div className="col-span-1 md:col-span-3">
          <NavigatePath />
          {/*order details section*/}
          <div className="private bg-white rounded-lg shadow-lg pt-4 px-2">
            <h3 className="m-4 text-xl font-bold text-primary-600 md:text-2xl">
              Recievied Orders
            </h3>
            <div className=" mt-6 pb-12 overflow-auto rounded-lg shadow hidden md:block">
              <table className="w-full">
                <thead className="private bg-gray-50 border-b-200 border-gray-200">
                  <tr>

                    <th className="w-30 p-3 text-sm font-semibold  tracking-wide text-center">
                      Order Date
                    </th>
                    <th className="w-30 p-3 text-sm font-semibold  tracking-wide text-center">
                      Order Status
                    </th>
                    <th className="p-3 text-sm font-semibold  tracking-wide text-center">
                      Requested Packages
                    </th>
                    <th className="w-30 p-3 text-sm font-semibold  tracking-wide text-center">
                      Total Price
                    </th>
                    <th className="w-24 p-3 text-sm font-semibold  tracking-wide text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {OrderData.map((service, index) => (
                    <TableRow key={index} data={service} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 gap-4 md:hidden">

              {OrderData.map((data) => (

                <div className="bg-white p-4 space-y-3 rounded-lg shadow">

                  <div className="flex items-center space-x-4 text-sm">
                    <div>{data.orderDate}</div>
                    <div>{data.orderStatus}</div>
                  </div>
                  <div>{data.RequestedPackages}</div>
                  <div>{data.total}</div>
                  <div className='btncontainer'>
                  {(data.orderStatus !== "Rejected" && data.orderStatus !== "Accepted") && (
                        <ToggleModal01 message="Confirm to Accept or Reject the Order?" orderID={data.orderID} orderDate={data.orderDate} RequestedPackages={data.RequestedPackages} total={data.total}  btnName="Action" closeBtn="Accept" size="xs"> </ToggleModal01>
                    )}
                    {(data.orderStatus == "Rejected") && (

                        < Button size="xs" color="failure">{data.orderStatus}</Button>

                    )}
                    {(data.orderStatus == "Accepted") && (

                        < Button size="xs" color="blue">{data.orderStatus}</Button>

                    )}
                  </div>
                </div>


              ))}

            </div>
          </div>
        </div>
      </section>
      {/*Footer*/}
      <Footer />
    </>
  )
}

export default AdminDashboard
