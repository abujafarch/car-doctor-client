import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)

    if (loading) {
        return <h1 className="font-bold text-2xl">Loading...</h1>
    }

    if (user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;