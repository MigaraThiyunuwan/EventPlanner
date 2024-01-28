import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export function Logout() {
    Cookies.remove('mytoken');
    let navigate = useNavigate()
    navigate(0)
    navigate("/")
    // Redirect to login or other actions after logout
}