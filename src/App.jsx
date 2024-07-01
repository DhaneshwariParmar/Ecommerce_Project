import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/nopage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage"
import AllProduct from "./pages/allProduct/AllProduct"
import Login from "./pages/regestration/Login"
import SignUp from "./pages/regestration/SignUp"
import UserDashboard from "./pages/user/UserDashboard"
import AdminDashboard from "./pages/admin/AdminDashboard"
import AddProductPage from "./pages/admin/AddProductPage"
import UpdateProductPage from "./pages/admin/UpdateProductPage"
import MyState from "./context/myState"
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import CategoryPage from "./pages/category/CategoryPage";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";

const App = () => {
  return (
    <MyState>
      <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/productInfo/:id" element={<ProductInfo />} />
        <Route path="/CartPage" element={<CartPage />}  />
        <Route path="/allproduct" element={<AllProduct />}  />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/category/:categoryname" element={<CategoryPage />} />

        <Route path="/userdashboard" element={
        <ProtectedRouteForUser>
          <UserDashboard />
          </ProtectedRouteForUser>
        } />

        <Route path="/admin-dashboard" element={
        <ProtectedRouteForAdmin>
        <AdminDashboard />
        </ProtectedRouteForAdmin>
        } />

        <Route path="/addproduct" element={
        <ProtectedRouteForAdmin>
        <AddProductPage />
        </ProtectedRouteForAdmin>
        } />


        <Route path="/updateproduct/:id" element={
        <ProtectedRouteForAdmin>
          <UpdateProductPage />
          </ProtectedRouteForAdmin>
         } />
      </Routes>
      <Toaster />
     </Router>
     </MyState>
     
  )
}

export default App