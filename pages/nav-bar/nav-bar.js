import Link from 'next/link';
import styles from './Nav.module.css'
import Image from 'next/image'
import logo from '../../public/images/logo/kr-logo6.png'
// import ContactForm from '../form/form'

export default function NavBar(){
    return(
        <>
            <ul className={styles.navBarList}>
                <li className={styles.logo}><Link href="/" className={styles.link}>
                    <Image className={styles.logo} src={logo}
                        alt="logo for Kinky Roots"
                        height={80}
                        width={330}
                    />
                </Link></li>
                <li className={styles.nav}><Link href="/" className={styles.link}>Home</Link></li>
                <li className={styles.nav}><Link href="../about/about" className={styles.link}>About</Link></li>
                <li className={styles.nav}><Link href="../salon-services/services" className={styles.link}>Services</Link></li>
                <li className={styles.nav}><Link href="../contact/contact" className={styles.link}>Contact Us</Link></li>
            </ul>
        </>
    )
}