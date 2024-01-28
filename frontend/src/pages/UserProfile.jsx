import { Card, Button, Label, TextInput, Table } from "flowbite-react";
import UserPhoto from "../images/User.jpg";
import axios from "axios";
import React, { lazy, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
const NavigationBar = lazy(() => import("../components/NavigationBar"));
const Footer = lazy(() => import("../components/Footer"));



function UserProfile() {
  const [activeTab, setActiveTab] = useState("accountDetails");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [cookies] = useCookies(['mytoken']);  // Get the token from the cookies

  useEffect(() => {
    // const token = cookies.mytoken;

    // console.log('Token111:', token);  // Log the token

    if (cookies['mytoken']) {
      console.log('Making fetch request...');  // Log that the fetch request is being made

      // Fetch the user data
      axios.get('http://127.0.0.1:8000/get-user/', {
        headers: {
          'Authorization': `Token ${cookies['mytoken']}`
        }
      })
        .then(response => setUser(response.data))
        .catch(error => {
          console.error('Error:', error);
          setError(error);
        });
    }
  }, [cookies['mytoken']]);

  // If there was an error, display the error message
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // If the user data has not been loaded yet, display a loading message
  if (user === null) {
    return <div>Loading...</div>;
  }

  // Display the user data
  return (
    <div>

      <NavigationBar />

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
              {user.first_name}
            </h5>


            <section className="flex justify-center mt-2 mb-10">
              <Button className="w-[150px] md:w-[170px] rounded-lg bg-primary uppercase text-white hover:!bg-secondary">
                Edit Profile Picture
              </Button>
            </section>
          </Card>
        </div>

        <div className="col-span-1 md:col-span-3">
          <div className="bg-white rounded-lg shadow-lg pt-4 px-2 mb-2">
            <h3 className=" m-4 text-xl font-bold text-primary-600 md:text-2xl">
              Account settings
            </h3>
            <div className="w-full h-10 flex justify-start rounded-lg shadow-sm mb-2">
              <Button
                className={`text-black bg-white rounded-md shadow-lg my-2 mr-1 ml-3 p-2 uppercase text-md font-semibold hover:!border-lg hover:!border-primary ${activeTab === "accountDetails"
                  }`}
                onClick={() => setActiveTab("accountDetails")}
              >
                Account Details
              </Button>
              <Button
                className={`text-black bg-white rounded-md shadow-lg my-2 p-2 text-md font-semibold uppercase hover:border-lg hover:border-primary ${activeTab === "changePassword"
                  }`}
                onClick={() => setActiveTab("changePassword")}
              >
                Change Password
              </Button>
            </div>


            {activeTab === "accountDetails" && (
              <div className="mt-2">
                <h3 className=" m-4 text-xl font-bold text-primary-600 md:text-xl">
                  Change Account Details
                </h3>
                <form className="flex max-w-full flex-col gap-4 m-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="small" value="First Name" />
                      </div>
                      <TextInput id="small" type="text" sizing="sm" value={user.first_name} />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="small" value="Last Name" />
                      </div>
                      <TextInput id="small" type="text" sizing="sm" value={user.last_name} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="small" value="Phone Number" />
                      </div>
                      <TextInput id="small" type="text" sizing="sm" value={user.phone} />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="small" value="Email" />
                      </div>
                      <TextInput id="small" type="email" sizing="sm" />
                    </div>
                  </div>

                  {/* <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email1" value="Email Address" />
                    </div>
                    <TextInput
                      id="email1"
                      type="email"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div> */}

                  <section className="flex justify-end mt-4 mb-10">
                    <Button className="w-[150px] md:w-[120px] rounded-lg bg-primary uppercase text-white hover:!bg-secondary">
                      Edit Details
                    </Button>
                  </section>
                </form>
              </div>
            )}

            {/*change password*/}
            {activeTab === "changePassword" && (
              <div className="mt-2">
                <h3 className="m-4 text-xl font-bold text-primary-600 md:text-xl">
                  Change Password
                </h3>
                <form className="flex max-w-full flex-col gap-4 m-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="password2" value="New password" />
                      </div>
                      <TextInput
                        id="password2"
                        type="password"
                        required
                        shadow
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label
                          htmlFor="repeat-password"
                          value="Confirm password"
                        />
                      </div>
                      <TextInput
                        id="repeat-password"
                        type="password"
                        required
                        shadow
                      />
                    </div>
                  </div>
                  <section className="flex justify-end mt-4 mb-10">
                    <Button className="w-[180px] md:w-[180px] rounded-lg bg-primary uppercase text-white hover:!bg-secondary">
                      Change Password
                    </Button>
                  </section>
                </form>
              </div>
            )}
          </div>

          {/*order details section*/}
          <div className="bg-white rounded-lg shadow-lg pt-4 px-2">
            <h3 className="m-4 text-xl font-bold text-primary-600 md:text-2xl">
              Order History
            </h3>
            <div className=" mt-6 pb-12 overflow-auto rounded-lg shadow hidden md:block">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-200 border-gray-200">
                  <tr>
                    <th className="w-24 p-3 text-sm font-semibold  tracking-wide text-center">
                      Order ID
                    </th>
                    <th className="w-30 p-3 text-sm font-semibold  tracking-wide text-center">
                      Order Date
                    </th>
                    <th className="w-30 p-3 text-sm font-semibold  tracking-wide text-center">
                      Order Status
                    </th>
                    <th className="p-3 text-sm font-semibold  tracking-wide text-center">
                      Packages
                    </th>
                    <th className="w-30 p-3 text-sm font-semibold  tracking-wide text-center">
                      Total Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-200 border-blue-600">
                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                      1
                    </td>
                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                      2023/12/01
                    </td>
                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                      Pending
                    </td>
                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                      Photography, Decorations
                    </td>
                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                      10000
                    </td>
                  </tr>
                  <tr className="border-b-200 border-blue-600">
                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                      2
                    </td>
                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                      2023/12/01
                    </td>
                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                      Pending
                    </td>
                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                      Photography, Decorations, Photography, Decorations, Photography
                    </td>
                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                      10000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 gap-4 md:hidden">
              <div className="bg-white p-4 space-y-3 rounded-lg shadow">
                <div>1</div>
                <div className="flex items-center space-x-4 text-sm">
                  <div>2023/12/01</div>
                  <div>Pending</div>
                </div>
                <div>Photography, Decorations, Photography, Decorations</div>
                <div>10000</div>
              </div>
              <div className="bg-white p-4 space-y-3 rounded-lg shadow">
                <div>2</div>
                <div className="flex items-center space-x-4 text-sm">
                  <div>2023/12/01</div>
                  <div>Pending</div>
                </div>
                <div>Photography, Decorations</div>
                <div>10000</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Footer*/}
      <Footer />
    </div>
  );
  // return (
  //   <>

  //     <NavigationBar />

  //     <section className="mt-12 mb-16 mx-4 grid grid-cols-1 gap-2 md:grid-cols-4 lg:grid-cols-4">
  //       <div className="items-center h-full col-span-1 md:col-span-1">
  //         <Card className="text-center max-w-sm w-full md:max-w-full mx-auto">
  //           <img
  //             alt="Bonnie image"
  //             height="100"
  //             src={UserPhoto}
  //             width="100"
  //             className="mb-3 rounded-full shadow-lg mx-auto"
  //           />
  //           <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
  //             Bonnie Green
  //           </h5>


  //           <section className="flex justify-center mt-2 mb-10">
  //             <Button className="w-[150px] md:w-[170px] rounded-lg bg-primary uppercase text-white hover:!bg-secondary">
  //               Edit Profile Picture
  //             </Button>
  //           </section>
  //         </Card>
  //       </div>

  //       <div className="col-span-1 md:col-span-3">
  //         <div className="bg-white rounded-lg shadow-lg pt-4 px-2 mb-2">
  //           <h3 className=" m-4 text-xl font-bold text-primary-600 md:text-2xl">
  //             Account settings
  //           </h3>
  //           <div className="w-full h-10 flex justify-start rounded-lg shadow-sm mb-2">
  //             <Button
  //               className={`text-black bg-white rounded-md shadow-lg my-2 mr-1 ml-3 p-2 uppercase text-md font-semibold hover:!border-lg hover:!border-primary ${activeTab === "accountDetails"
  //                 }`}
  //               onClick={() => setActiveTab("accountDetails")}
  //             >
  //               Account Details
  //             </Button>
  //             <Button
  //               className={`text-black bg-white rounded-md shadow-lg my-2 p-2 text-md font-semibold uppercase hover:border-lg hover:border-primary ${activeTab === "changePassword"
  //                 }`}
  //               onClick={() => setActiveTab("changePassword")}
  //             >
  //               Change Password
  //             </Button>
  //           </div>


  //           {activeTab === "accountDetails" && (
  //             <div className="mt-2">
  //               <h3 className=" m-4 text-xl font-bold text-primary-600 md:text-xl">
  //                 Change Account Details
  //               </h3>
  //               <form className="flex max-w-full flex-col gap-4 m-6">
  //                 <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
  //                   <div>
  //                     <div className="mb-2 block">
  //                       <Label htmlFor="small" value="First Name" />
  //                     </div>
  //                     <TextInput id="small" type="text" sizing="sm" />
  //                   </div>
  //                   <div>
  //                     <div className="mb-2 block">
  //                       <Label htmlFor="small" value="Last Name" />
  //                     </div>
  //                     <TextInput id="small" type="text" sizing="sm" />
  //                   </div>
  //                 </div>
  //                 <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
  //                   <div>
  //                     <div className="mb-2 block">
  //                       <Label htmlFor="small" value="Phone Number" />
  //                     </div>
  //                     <TextInput id="small" type="text" sizing="sm" />
  //                   </div>
  //                   <div>
  //                     <div className="mb-2 block">
  //                       <Label htmlFor="small" value="Email" />
  //                     </div>
  //                     <TextInput id="small" type="email" sizing="sm" />
  //                   </div>
  //                 </div>

  //                 {/* <div>
  //                   <div className="mb-2 block">
  //                     <Label htmlFor="email1" value="Email Address" />
  //                   </div>
  //                   <TextInput
  //                     id="email1"
  //                     type="email"
  //                     placeholder="name@flowbite.com"
  //                     required
  //                   />
  //                 </div> */}

  //                 <section className="flex justify-end mt-4 mb-10">
  //                   <Button className="w-[150px] md:w-[120px] rounded-lg bg-primary uppercase text-white hover:!bg-secondary">
  //                     Edit Details
  //                   </Button>
  //                 </section>
  //               </form>
  //             </div>
  //           )}

  //           {/*change password*/}
  //           {activeTab === "changePassword" && (
  //             <div className="mt-2">
  //               <h3 className="m-4 text-xl font-bold text-primary-600 md:text-xl">
  //                 Change Password
  //               </h3>
  //               <form className="flex max-w-full flex-col gap-4 m-6">
  //                 <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
  //                   <div>
  //                     <div className="mb-2 block">
  //                       <Label htmlFor="password2" value="New password" />
  //                     </div>
  //                     <TextInput
  //                       id="password2"
  //                       type="password"
  //                       required
  //                       shadow
  //                     />
  //                   </div>
  //                   <div>
  //                     <div className="mb-2 block">
  //                       <Label
  //                         htmlFor="repeat-password"
  //                         value="Confirm password"
  //                       />
  //                     </div>
  //                     <TextInput
  //                       id="repeat-password"
  //                       type="password"
  //                       required
  //                       shadow
  //                     />
  //                   </div>
  //                 </div>
  //                 <section className="flex justify-end mt-4 mb-10">
  //                   <Button className="w-[180px] md:w-[180px] rounded-lg bg-primary uppercase text-white hover:!bg-secondary">
  //                     Change Password
  //                   </Button>
  //                 </section>
  //               </form>
  //             </div>
  //           )}
  //         </div>

  //         {/*order details section*/}
  //         <div className="bg-white rounded-lg shadow-lg pt-4 px-2">
  //           <h3 className="m-4 text-xl font-bold text-primary-600 md:text-2xl">
  //             Order History
  //           </h3>
  //           <div className=" mt-6 pb-12 overflow-auto rounded-lg shadow hidden md:block">
  //             <table className="w-full">
  //               <thead className="bg-gray-50 border-b-200 border-gray-200">
  //                 <tr>
  //                   <th className="w-24 p-3 text-sm font-semibold  tracking-wide text-center">
  //                     Order ID
  //                   </th>
  //                   <th className="w-30 p-3 text-sm font-semibold  tracking-wide text-center">
  //                     Order Date
  //                   </th>
  //                   <th className="w-30 p-3 text-sm font-semibold  tracking-wide text-center">
  //                     Order Status
  //                   </th>
  //                   <th className="p-3 text-sm font-semibold  tracking-wide text-center">
  //                     Packages
  //                   </th>
  //                   <th className="w-30 p-3 text-sm font-semibold  tracking-wide text-center">
  //                     Total Price
  //                   </th>
  //                 </tr>
  //               </thead>
  //               <tbody>
  //                 <tr className="border-b-200 border-blue-600">
  //                   <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
  //                     1
  //                   </td>
  //                   <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
  //                     2023/12/01
  //                   </td>
  //                   <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
  //                     Pending
  //                   </td>
  //                   <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
  //                     Photography, Decorations
  //                   </td>
  //                   <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
  //                     10000
  //                   </td>
  //                 </tr>
  //                 <tr className="border-b-200 border-blue-600">
  //                   <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
  //                     2
  //                   </td>
  //                   <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
  //                     2023/12/01
  //                   </td>
  //                   <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
  //                     Pending
  //                   </td>
  //                   <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
  //                     Photography, Decorations, Photography, Decorations, Photography
  //                   </td>
  //                   <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
  //                     10000
  //                   </td>
  //                 </tr>
  //               </tbody>
  //             </table>
  //           </div>
  //           <div className="grid grid-cols-1 gap-4 md:hidden">
  //             <div className="bg-white p-4 space-y-3 rounded-lg shadow">
  //               <div>1</div>
  //               <div className="flex items-center space-x-4 text-sm">
  //                 <div>2023/12/01</div>
  //                 <div>Pending</div>
  //               </div>
  //               <div>Photography, Decorations, Photography, Decorations</div>
  //               <div>10000</div>
  //             </div>
  //             <div className="bg-white p-4 space-y-3 rounded-lg shadow">
  //               <div>2</div>
  //               <div className="flex items-center space-x-4 text-sm">
  //                 <div>2023/12/01</div>
  //                 <div>Pending</div>
  //               </div>
  //               <div>Photography, Decorations</div>
  //               <div>10000</div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //     {/*Footer*/}
  //     <Footer />
  //   </>
  // );
};
export default UserProfile;
