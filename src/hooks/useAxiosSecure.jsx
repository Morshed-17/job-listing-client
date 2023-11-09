import axios from "axios";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";


const axiosSecure = axios.create({
    // baseURL: 'http://localhost:5001',
    baseURL: 'https://job-listing-server-three.vercel.app',
    withCredentials: false
})

const useAxiosSecure = () => {
    const {logOut} = UseAuth()
    const navigate = useNavigate()
    axiosSecure.interceptors.response.use(res => {
        return res;

    }, error => {
        console.log('interceptor error', error.response);
        // if(error.response.status === 401 || error.response.status === 403){
        //     console.log('logout the user');
        //     logOut()
        //     .then(() => {
        //         navigate('/login')
        //     })
        //     .catch(error => console.log(error))
        // }
    })
    return axiosSecure
};

export default useAxiosSecure;