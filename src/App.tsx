import { Routes, Route } from "react-router-dom";
import RoleSelection from "./RoleSelection";
import PassengerDashboard from "./PassengerDashboard";
import DriverDashboard from "./DriverDashboard";
import EmployeeDashboard from "./EmployeeDashboard";
import OrdersPage from "./OrdersPage";
import ShopPage from "./ShopPage";
import PaymentPage from "./PaymentPage";
import AttractionsPage from "./AttractionsPage";
import GpsNavigator from "./GpsNavigator";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RoleSelection />} />
      <Route path="/passenger" element={<PassengerDashboard />} />
      <Route path="/driver" element={<DriverDashboard />} />
      <Route path="/admin" element={<EmployeeDashboard />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/attractions" element={<AttractionsPage />} />
      <Route path="/gps" element={<GpsNavigator />} />
    </Routes>
  );
}
