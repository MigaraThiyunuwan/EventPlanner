import React from 'react'
import '../css/style.css'
import { Card, Button, Label, TextInput, Table } from "flowbite-react";
import { useState } from "react";
import { Breadcrumb } from 'flowbite-react';
import UserPhoto from "../images/User.jpg";
import NavigatePath from '../components/NavigatePath'
import NewNav from '../components/NewNav'
import Footer from '../components/Footer'
import ToggleModal01 from '../components/ToggleModal01'
import { useEffect } from 'react';
import axios from 'axios';
import TableRow2 from '../components/admin/TableRow2';


const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("accountDetails");
    const [MessageData, setMessageData] = useState([]);

    async function LoadMessages() {
        try {
            const result = await axios.get("http://localhost:8000/message-details/");
            setMessageData(result.data);
            console.log(result);
        } catch (error) {
            // handle error
        }
    }

    useEffect(() => {
        (async () => await LoadMessages())();
    }, []);

    return (
        <>
            <NewNav />
            {/*main section*/}
            <section className="mt-12 mb-16 mx-4 grid grid-cols-1 gap-2 md:grid-cols-4 lg:grid-cols-4">
                <div className="items-center h-full col-span-1 md:col-span-1">
                    <Card className="text-center max-w-sm w-full md:max-w-full mx-auto">
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
                        <section className="picturebtn flex justify-center mt-2 mb-10">

                            <a href='admindashbord'>
                                <Button className="w-[150px] md:w-[170px] rounded-lg bg-primary uppercase text-white hover:!bg-secondary">
                                    Back to dash Board
                                </Button>
                            </a>
                        </section>
                    </Card>
                </div>

                <div className="col-span-1 md:col-span-3">
                    <NavigatePath >
                        <div>
                            <Breadcrumb.Item href="adminmessages">  - Messages</Breadcrumb.Item>
                        </div>
                    </NavigatePath>
                    {/*order details section*/}
                    <div className="bg-white rounded-lg shadow-lg pt-4 px-2">
                        <h3 className="m-4 text-xl font-bold text-primary-600 md:text-2xl">
                            Recievied Messages
                        </h3>
                        <div className=" mt-6 pb-12 overflow-auto rounded-lg shadow hidden md:block">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b-200 border-gray-200">
                                    <tr>

                                        <th className="w-30 p-3 text-sm font-semibold  tracking-wide text-center">
                                            Name
                                        </th>
                                        <th className="p-3 text-sm font-semibold  tracking-wide text-center">
                                            Email
                                        </th>
                                        <th className="w-30 p-3 text-sm font-semibold  tracking-wide text-center">
                                            Message
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {MessageData.map((service, index) => (
                                        <TableRow2 key={index} data={service} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:hidden">
                            {MessageData.map((data) => (
                                <div className="bg-white p-4 space-y-3 rounded-lg shadow">

                                    <div className="flex items-center space-x-4 text-sm">

                                        <div>{data.full_name}</div>
                                    </div>
                                    <div>{data.email}</div>
                                    <ToggleModal01 message="" btnName="View Message" closeBtn="OK" size="xs">
                                        <div className="space-y-6">
                                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                            {data.content}
                                            </p>

                                        </div>
                                    </ToggleModal01>

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
