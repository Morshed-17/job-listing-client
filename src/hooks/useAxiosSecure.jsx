import axios from "axios";



const axiosSecure = axios.create({
    baseURL: 'http://localhost:5001',
    withCredentials: true
})

const useAxiosSecure = () => {
    // const {logOut} = useContext(AuthContext)
    // const navigate = useNavigate()
    // axiosSecure.interceptors.response.use(res => {
    //     return res;

    // }, error => {
    //     console.log('interceptor error', error.response);
        
    // })
    return axiosSecure
};

export default useAxiosSecure;