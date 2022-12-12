import Footer from "../pages/footer/footer";
import NavBar from "../pages/nav-bar/nav-bar";


const Layout = ({children}) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;