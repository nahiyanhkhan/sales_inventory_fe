import { Outlet } from "react-router";
import NavBar from "../partials/NavBar";
import SideBar from "../partials/SideBar";
import { useState } from "react";

const DashboardLayout = () => {
    
    const token = localStorage.getItem("token");

    // return token ? <Outlet /> : <h1 style={{color: "rebeccapurple"}}>Access Denied!</h1>;
    if (!token) return <Navigate to="/login" />;

    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <NavBar isSidebarOpen={isSidebarOpen} MenuBarClickHandler={toggleSidebar}/>
            
            <div id="sideNavRef" className = {isSidebarOpen ? "side-nav-open" : "side-nav-close"}>
                <SideBar />
            </div>
            
            <div id="contentRef" className= {isSidebarOpen ? "content" : "content-expand"}>
                <Outlet />
            </div>
        </>
    );
};

export default DashboardLayout;