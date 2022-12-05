import Link from 'next/link';
import styles from '../styles/Nav.module.css'

export default function NavBar(){
    return(
        <>
            <ul className={styles.navBarList}>
                <li className={styles.nav}><Link href="/about" lassName={styles.link}>About Us</Link></li>
                <li className={styles.nav}><Link href="" lassName={styles.link}>Schedule appointment</Link></li>
                <li className={styles.logo}><Link href="/" className={styles.link}>Kinky Roots</Link></li>
                <li className={styles.nav}><Link href="/services" lassName={styles.link}>Services</Link></li>
                <li className={styles.nav}><Link href="/contact" lassName={styles.link}>Contact Us</Link></li>
            </ul>
        </>
    )
}