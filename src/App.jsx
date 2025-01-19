import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetOTP from "./pages/PasswordResetOTP";
import SetPasswordPage from "./pages/SetPasswordPage";
import LogoutPage from "./pages/LogoutPage";

import DashboardLayout from "./layouts/DashboardLayout";
import DashboardIndexPage from "./pages/dashboard/IndexPage";
import DashboardCustomerPage from "./pages/dashboard/CustomerPage";
import DashboardCategoryPage from "./pages/dashboard/CategoryPage";
import DashboardProductPage from "./pages/dashboard/ProductPage";
import DashboardSalePage from "./pages/dashboard/SalePage";
import DashboardInvoicePage from "./pages/dashboard/InvoicePage";
import DashboardReportPage from "./pages/dashboard/ReportPage";
import DashboardProfilePage from "./pages/dashboard/ProfilePage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IndexPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path="/reset-password" element={<PasswordReset />} />
                    <Route path="/reset-password-otp" element={<PasswordResetOTP />} />
                    <Route path="/set-new-password" element={<SetPasswordPage />} />
                    <Route path='/logout' element={<LogoutPage />} />

                    <Route path="/dashboard/" element={<DashboardLayout />}>
                        <Route path="index/" element={<DashboardIndexPage />} />
                        <Route path="profile/" element={<DashboardProfilePage />} />
                        <Route path="customer/" element={<DashboardCustomerPage />} />
                        <Route path="category/" element={<DashboardCategoryPage />} />
                        <Route path="product/" element={<DashboardProductPage />} />
                        <Route path="sale/" element={<DashboardSalePage />} />
                        <Route path="invoice/" element={<DashboardInvoicePage />} />
                        <Route path="report/" element={<DashboardReportPage />} />
                    </Route>

                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;