import React from 'react'
import NavigationBar from '../components/NavigationBar'
import {Textarea} from 'flowbite-react';
import logo from '../images/logo_trans.png'
import FooterComponent from '../components/FooterComponent'
import NewNav from '../components/NewNav';

function ContactUs() {
    return (
        <div>
            <NewNav/>
            <div className='signContainer'>

                <div className='formgrid'>

                    <img class="h-auto max-w-full" style={{ padding: 50 }} src={logo} alt="image description"></img>

                    <form class="max-w-md mx-auto">

                        <div class="relative z-0 w-full mb-5 group">
                            <input type="text" name="fullname" id="fullname" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="fullname" style={{ fontSize: 15 }} class="font-bold peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                        </div>

                        <div class="relative z-0 w-full mb-5 group">
                            <input type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="email" style={{ fontSize: 15 }} class="font-bold peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                        <div className='textArea'>
                            <Textarea id="comment" placeholder="Leave a message..." required rows={4} />
                        </div>

                        <div className='subButton'>
                            <button type="submit" class="button">Send Message</button>
                        </div>

                    </form>
                </div>

            </div>
            <FooterComponent />
        </div>
    )
}

export default ContactUs
