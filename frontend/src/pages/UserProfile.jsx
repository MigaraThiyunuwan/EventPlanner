import { Card, Button, Label, TextInput, Table } from "flowbite-react";
import UserPhoto from "../images/User.jpg";
import axios from "axios";
import React, { lazy, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import NewNav from "../components/NewNav";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Footer = lazy(() => import("../components/Footer"));

function UserProfile() {
  const [activeTab, setActiveTab] = useState("accountDetails");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [cookies] = useCookies(["mytoken"]); // Get the token from the cookies

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  let navigate = useNavigate();

  function Logout() {
    Cookies.remove("mytoken");
    navigate("/");
  }

  useEffect(() => {
    // const token = cookies.mytoken;

    // console.log('Token111:', token);  // Log the token

    if (cookies["mytoken"]) {
      console.log("Making fetch request..."); // Log that the fetch request is being made

      // Fetch the user data
      axios
        .get("http://127.0.0.1:8000/get-user/", {
          headers: {
            Authorization: `Token ${cookies["mytoken"]}`,
          },
        })
        .then((response) => setUser(response.data))
        .catch((error) => {
          console.error("Error:", error);
          setError(error);
        });
    }
  }, [cookies["mytoken"]]);

  //display the error message
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // If the user data has not been loaded, display a loading message
  if (user === null) {
    return <div>Loading...</div>;
  }

  {
    /*change details*/
  }

  const handleSubmit = async (e) => {
    const content = {
      first_name: firstname,
      last_name: lastname,
      phone: phone,
      email: email,
    };

    e.preventDefault();

    console.log("inside func");

    // const formData = new FormData(e.target);
    console.log("content ", content, {
      headers: {
        Authorization: `Token ${cookies["mytoken"]}`,
      },
    });
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/update_user",
        content
      );

      console.log("response: ", response.data);
    } catch (error) {
      console.error("there was an error!", error);
    }

    // await axios
    //   .post("http://127.0.0.1:8000/update_user/", formData)
    //   .then((response) => {
    //     if (response.status === 201) {
    //       console.log("ok");
    //     } else if (response.status === 500) {
    //       console.log("error");
    //     } else {
    //       console.log("invalid");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error?.response?.status);
    //   });
  };
  return (
    <div>
      <NewNav />

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
              <Button
                onClick={Logout}
                className="w-[150px] md:w-[170px] rounded-lg bg-primary uppercase text-white hover:!bg-secondary"
              >
                Logout
              </Button>
            </section>
          </Card>
        </div>

        <div className="col-span-1 md:col-span-3">
          <div className="bg-white rounded-lg shadow-lg pt-4 px-2 mb-2">
            <h3 className=" m-4 text-xl font-bold text-primary-600 md:text-2xl">
              Account settings
            </h3>
            {/*menu tab*/}
            <div className="w-full h-10 flex justify-start rounded-lg shadow-sm mb-2">
              <Button
                className={`text-black bg-white rounded-md shadow-lg my-2 mr-1 ml-3 py-4 uppercase text-xs md:text-md font-semibold hover:!border-lg hover:!border-primary ${
                  activeTab === "accountDetails"
                }`}
                onClick={() => setActiveTab("accountDetails")}
              >
                Account Details
              </Button>
              <Button
                className={`text-black bg-white rounded-md py-4 shadow-lg my-2 mr-1 ml-3 uppercase text-xs md:text-md font-semibold hover:!border-lg hover:!border-primary ${
                  activeTab === "changeaccountDetails"
                }`}
                onClick={() => setActiveTab("changeaccountDetails")}
              >
                Change Account Details
              </Button>
            </div>
            {/*display user details*/}
            {activeTab === "accountDetails" && (
              <div className="mt-2">
                <h3 className="m-4 text-xl font-bold text-primary-600 md:text-xl text-primary">
                  User Details
                </h3>
                <div className="p-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="shadow-md p-6 rounded-lg text-start">
                    <div className="font-semibold">First Name</div>
                    <div className="text-sm text-gray-700">
                      {user.first_name}
                    </div>
                  </div>
                  <div className="shadow-md p-6 rounded-lg text-start">
                    <div className="font-semibold text-sm text-gray-700">
                      Last Name
                    </div>
                    <div className="text-sm text-gray-700">
                      {user.last_name}
                    </div>
                  </div>
                  <div className="shadow-md p-6 rounded-lg text-start">
                    <div className="font-semibold text-sm text-gray-700">
                      Phone Number
                    </div>
                    <div className="text-sm text-gray-700">{user.phone}</div>
                  </div>
                  <div className="shadow-md p-6 rounded-lg text-start">
                    <div className="font-semibold text-sm text-gray-700">
                      Email
                    </div>
                    <div className="text-sm text-gray-700">{user.email}</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "changeaccountDetails" && (
              <div className="mt-2">
                <h3 className=" m-4 text-xl font-bold text-primary-600 md:text-xl text-primary">
                  Change Account Details
                </h3>
                <form
                  className="flex max-w-full flex-col gap-4 m-6"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="first_name" value="First Name" />
                      </div>
                      <TextInput
                        name="first_name"
                        id="first_name"
                        type="text"
                        sizing="sm"
                        defaultValue={user.first_name}
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="last_name" value="Last Name" />
                      </div>
                      <TextInput
                        id="last_name"
                        name="last_name"
                        type="text"
                        sizing="sm"
                        defaultValue={user.last_name}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="phone" value="Phone Number" />
                      </div>
                      <TextInput
                        type="phone"
                        name="phone"
                        id="phone"
                        sizing="sm"
                        defaultValue={user.phone}
                        onChange={(e) => setPhone(e.target.value)}
                        // onChange={(e) => handleInputChange(e, "phone")}
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="email" value="Email" />
                      </div>
                      <TextInput
                        type="email"
                        name="email"
                        id="email"
                        sizing="sm"
                        defaultValue={user.email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <section className="flex justify-end mt-4 mb-10">
                    <Button
                      type="submit"
                      className="w-[150px] md:w-[120px] rounded-lg bg-primary uppercase text-white hover:!bg-secondary"
                    >
                      Edit Details
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
                      Photography, Decorations, Photography, Decorations,
                      Photography
                    </td>
                    <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                      10000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <div className="grid grid-cols-1 gap-4 md:hidden">
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
            </div> */}
          </div>
        </div>
      </section>
      {/*Footer*/}
      <Footer />
    </div>
  );
}
export default UserProfile;
