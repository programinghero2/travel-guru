import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <p>Loading.....</p>
    }
   if(user){
    return children
   }
   return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;