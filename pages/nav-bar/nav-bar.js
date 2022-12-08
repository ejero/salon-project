import Link from 'next/link';
import styles from './Nav.module.css'
import Image from 'next/image'
import logo from '../../public/images/logo/kr-logo6.png'

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
                <li className={styles.nav}><Link href="/" lassName={styles.link}>Home</Link></li>
                <li className={styles.nav}><Link href="../about/about" lassName={styles.link}>About</Link></li>
                <li className={styles.nav}><Link href="../appointments/appointments" lassName={styles.link}>appointments</Link></li>
                <li className={styles.nav}><Link href="../salon-services/services" lassName={styles.link}>Services</Link></li>
                <li className={styles.nav}><Link href="../contact/contact" lassName={styles.link}>Contact Us</Link></li>
            </ul>
        </>
    )
}