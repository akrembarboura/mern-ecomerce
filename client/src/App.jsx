import { Routes, Route } from "react-router-dom";

// auth
import AuthLayout from "./pages/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";

// admin
import AdminLayout from "./components/admin-View/layout";
import AdminDashboard from "./pages/admin-View/dashboard";
import AdminFeatures from "./pages/admin-View/features";
import AdminOrders from "./pages/admin-View/orders";
import AdminProducts from "./pages/admin-View/products";

// shop
import ShoppingLayout from "./components/shoping-View/layout";
import ShoppingHome from "./pages/shoping-View/home";
import ShoppingAccount from "./pages/shoping-View/account";
import ShoppingListing from "./pages/shoping-View/listing";
import ShoppingCheckout from "./pages/shoping-View/checkout";

import CheckAuth from "./components/common/check-auth";
import NotFound from "./pages/not-found/notFound";
import UnAuthPage from "./pages/unauth-page/index";

function App() {
  const isAuthenticated = true;
  const user = { name: "akrem", role: "user" };

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>

        {/* AUTH */}
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* ADMIN */}
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

        {/* SHOP */}
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        }>
        
          <Route path="home" element={<ShoppingHome />} />
         
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="list" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
        </Route>

        <Route path="/unauth-page" element={<UnAuthPage />} />
        <Route path="*" element={<NotFound  />} />

      </Routes>
    </div>
  );
}

export default App;