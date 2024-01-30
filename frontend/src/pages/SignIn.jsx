import React, { useState, useEffect } from 'react'
import logo from '../images/logo_trans.png'
import NewNav from '../components/NewNav'
import Footer from '../components/Footer'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import APIService from '../components/API/APIService';


const SignIn =() => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //set token
    const [token, setToken] = useCookies(['mytoken'])
    const [error, setError] = useState('')
    let navigate = useNavigate()

    useEffect(() => {
        if (token['mytoken']) {
            navigate('/')
        }

    })

    const loginBtn = () => {
        APIService.LoginUser({ username, password })
            .then((resp) => {
                if (resp.token) {
                    setToken('mytoken', resp.token)
                } else {
                    setError("Email or Password Incorrect")
                    setPassword("")
                    setUsername("")
                }
            })
            // .then((resp) => {setToken('mytoken',resp.token))})
            .then(error => console.log(error))
    }


    return (
        <div>
            <NewNav />

            <div className='signContainer'>

                <div className='formgrid'>

                    <img class="h-auto max-w-full" style={{ padding: 50 }} src={logo} alt="image description"></img>

                    

                        <div class="relative z-0 w-full mb-5 group">
                            <input type="email" name="email" id="email" value={username} onChange={e => setUsername(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="email" style={{ fontSize: 15 }} class="font-bold peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="password" style={{ fontSize: 15 }} class="font-bold peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>

                        <div className='subButton'>
                            <button type="submit" onClick={loginBtn} class="button ">Sign In</button>
                        </div>

                        <p class="text-gray-500 dark:text-gray-400" style={{ marginTop: "20px" }}>Don't have an account? <a href="signup" class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Click here to Sign Up
                            <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a></p>
                        


                    
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default SignIn
