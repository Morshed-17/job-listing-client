import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const loacation = useLocation()
    console.log(loacation);
    
    if(loading){
        return <div className="h-[60vh] flex items-center justify-center">
        <h2 className="text-xl font-bold mr-3">Loading</h2>
        <ClipLoader

        color={'#ffffff'}
        loading={loading}
        
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      
        </div>
    }
    if(user){
        return children 
    }
    
    return <Navigate state={location.pathname}  to='/login'></Navigate>
};

export default PrivateRoute;