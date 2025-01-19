import { Navigate, useNavigate } from "react-router";

const LogoutPage = () => {

    localStorage.removeItem("token");

    // These two lines will be used if this file is "logoutPage.js"
    // const navigate = useNavigate();
    // navigate("/login");

    return <Navigate to="/login" />
};

export default LogoutPage;