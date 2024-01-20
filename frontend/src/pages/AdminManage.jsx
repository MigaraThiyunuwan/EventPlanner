import React from 'react'
import { Card, Button, Label, TextInput, Table } from "flowbite-react";
import { useState } from "react";
import { Breadcrumb } from 'flowbite-react';
import UserPhoto from "../images/User.jpg";
import NavigatePath from '../components/NavigatePath'
import NewNav from '../components/NewNav'
import Footer from '../components/Footer'
import ToggleModal01 from '../components/ToggleModal01';

const AdminManage = () => {
    const [activeTab, setActiveTab] = useState("accountDetails");
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
                        <section className="flex justify-center mt-2 mb-10">
                            <a href='admindashbord'>
                                <Button className="w-[150px] md:w-[170px] rounded-lg bg-primary uppercase text-white hover:!bg-secondary">
                                    Back to Dash Board
                                </Button>
                            </a>
                        </section>
                    </Card>
                </div>

                <div className="col-span-1 md:col-span-3">
                    <NavigatePath >
                        <div>
                            <Breadcrumb.Item href="managepackages">  - Manage Packages</Breadcrumb.Item>
                        </div>

                    </NavigatePath>
                    {/*order details section*/}
                    <div className="bg-white rounded-lg shadow-lg pt-4 px-2">
                        <h3 className="m-4 text-xl font-bold text-primary-600 md:text-2xl">
                            Manage Packages
                        </h3>
                        <div className=" mt-6 pb-12 overflow-auto rounded-lg shadow hidden md:block">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b-200 border-gray-200">
                                    <tr>

                                        <th className="w-30 p-3 text-sm font-semibold  tracking-wide text-center">
                                            Entertainment
                                        </th>
                                        <th className="w-30 p-3 text-sm font-semibold  tracking-wide text-center">
                                            Catering
                                        </th>
                                        <th className="p-3 text-sm font-semibold  tracking-wide text-center">
                                            Photography
                                        </th>
                                        <th className="w-30 p-3 text-sm font-semibold  tracking-wide text-center">
                                            Decoration
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b-200 border-blue-600" >

                                        <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                                            <div className='btncontainer'>
                                                <ToggleModal01 message="" btnName="Entertainment" closeBtn="Confirm" size="md">
                                                    <div className="space-y-6">
                                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Change Entertainment Packages</h3>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="DJ Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="Full Band Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="Dance Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="DJ + Dance Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="Full Band + Dance Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>

                                                        <div className="mb-2 block">
                                                            <Label htmlFor="number" value="Confirm to Change Entertainment Packages" />
                                                        </div>
                                                    </div>
                                                </ToggleModal01>
                                            </div>
                                        </td>
                                        <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                                            <div className='btncontainer'>
                                                <ToggleModal01 message="" btnName="Catering" closeBtn="Confirm" size="md">
                                                    <div className="space-y-6">
                                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Change Catering Packages</h3>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="DJ Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="Full Band Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="Dance Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="DJ + Dance Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="Full Band + Dance Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>

                                                        <div className="mb-2 block">
                                                            <Label htmlFor="number" value="Confirm to Change Catering Packages" />
                                                        </div>
                                                    </div>
                                                </ToggleModal01>
                                            </div>
                                        </td>
                                        <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                                            <div className='btncontainer'>
                                                <ToggleModal01 message="" btnName="Photography" closeBtn="Confirm" size="md">
                                                    <div className="space-y-6">
                                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Change Photography Packages</h3>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="DJ Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="Full Band Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="Dance Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="DJ + Dance Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="Full Band + Dance Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>

                                                        <div className="mb-2 block">
                                                            <Label htmlFor="number" value="Confirm to Change Photography Packages" />
                                                        </div>
                                                    </div>
                                                </ToggleModal01>
                                            </div>
                                        </td>

                                        <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                                            <div className='btncontainer'>
                                                <ToggleModal01 message="" btnName="Decorations" closeBtn="Confirm" size="md">
                                                    <div className="space-y-6">
                                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Change Decorations Packages</h3>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="DJ Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="Full Band Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="Dance Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="DJ + Dance Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="number" value="Full Band + Dance Price" />
                                                            </div>
                                                            <TextInput id="number" type="number" name="dj_price" required />
                                                        </div>

                                                        <div className="mb-2 block">
                                                            <Label htmlFor="number" value="Confirm to Change Decorations Packages" />
                                                        </div>
                                                    </div>
                                                </ToggleModal01>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:hidden">
                            <div className="bg-white p-4 space-y-3 rounded-lg shadow">

                                <div className='btncontainer'>
                                    <ToggleModal01 message="" btnName="Entertainment" closeBtn="Confirm" size="md">
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Change Entertainment Packages</h3>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="DJ Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="Full Band Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="Dance Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="DJ + Dance Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="Full Band + Dance Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>

                                            <div className="mb-2 block">
                                                <Label htmlFor="number" value="Confirm to Change Entertainment Packages" />
                                            </div>
                                        </div>
                                    </ToggleModal01>
                                    <ToggleModal01 message="" btnName="Catering" closeBtn="Confirm" size="md">
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Change Catering Packages</h3>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="DJ Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="Full Band Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="Dance Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="DJ + Dance Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="Full Band + Dance Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>

                                            <div className="mb-2 block">
                                                <Label htmlFor="number" value="Confirm to Change Catering Packages" />
                                            </div>
                                        </div>
                                    </ToggleModal01>
                                    <ToggleModal01 message="" btnName="Photography" closeBtn="Confirm" size="md">
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Change Photography Packages</h3>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="DJ Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="Full Band Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="Dance Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="DJ + Dance Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="Full Band + Dance Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>

                                            <div className="mb-2 block">
                                                <Label htmlFor="number" value="Confirm to Change Photography Packages" />
                                            </div>
                                        </div>
                                    </ToggleModal01>
                                    <ToggleModal01 message="" btnName="Decorations" closeBtn="Confirm" size="md">
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Change Decorations Packages</h3>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="DJ Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="Full Band Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="Dance Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="DJ + Dance Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="number" value="Full Band + Dance Price" />
                                                </div>
                                                <TextInput id="number" type="number" name="dj_price" required />
                                            </div>

                                            <div className="mb-2 block">
                                                <Label htmlFor="number" value="Confirm to Change Decorations Packages" />
                                            </div>
                                        </div>
                                    </ToggleModal01>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/*Footer*/}
            <Footer />
        </>
    )
}

export default AdminManage
