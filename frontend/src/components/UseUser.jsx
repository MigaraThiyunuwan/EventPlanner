import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
export default function UseUser() {
    const [user, setUser] = useState(null);
    const [cookies] = useCookies(['mytoken']);  // Get the token from the cookies

    useEffect(() => {
        if (cookies['mytoken']) {
            axios.get('http://127.0.0.1:8000/get-user/', {
                headers: {
                    'Authorization': `Token ${cookies['mytoken']}`
                }
            })
            .then(response => setUser(response.data))
            .catch(error => {
                console.error('Error:', error);
            });
        }
    }, [cookies['mytoken']]);

    return user;
}