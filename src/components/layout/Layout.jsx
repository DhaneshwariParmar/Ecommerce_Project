/* eslint-disable react/prop-types */
import  Navbar  from "../navbar/Navbar"
import Footer from "../footer/Footer"


const Layout = ({children}) => {
  return (
    <div>
    <Navbar />
    <div className="main-content">
        {children}
    </div>
    <Footer />
    </div>
  )
}

export default Layout