import Footer from "../pages/footer/footer";
import NavBar from "../pages/nav-bar/nav-bar";
import styles from '../styles/Home.module.css'

const Layout = ({children}) => {
    return (
        <div className={styles.container2}>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;