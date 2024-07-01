import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchbar/SearchBAr";
import { useSelector } from "react-redux";


const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
           
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            
            <li>
                <Link to={'/allproduct'}>All Product</Link>
            </li>

            
            {!user ? <li>
                <Link to={'/signup'}>Signup</Link>
            </li> : ""}

            
            {!user ? <li>
                <Link to={'/login'}>Login</Link>
            </li> : ""}

            
            {user?.role === "user" && <li>
                <Link to={'/userdashboard'}>User</Link>
            </li>}

            
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>}

            
            {user && <li className=" cursor-pointer" onClick={logout}>
                logout
            </li>}

            
            <li>
                <Link to={'/CartPage'}>
                    Cart({cartItems.length})
                </Link>
            </li>
        </ul>
    )
    return (
        <nav className="bg-pink-600 sticky top-0">
           
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
               
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className=" font-bold text-white text-2xl text-center">E-Bharat</h2>
                    </Link>
                </div>

                
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

               
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;