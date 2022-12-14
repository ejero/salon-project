import styles from './Footer.module.css'
import Image from 'next/image'
import logo from '../../public/images/logo/kr-logo6.png'
import Link from 'next/link'
import twitter from './twitter.png'
import github from './Github-mark-white.png'
import ln from './In-White-96.png'
import mail from './mail2.svg'


export default function Footer(){
return(
    <>
    <footer>
    <div className={styles.footer}>
        <div className={styles.icons}>

        <Link href="https://twitter.com/lovelittlerose" target="_blank" >
            <Image className={styles.iconSvg} src={twitter} alt="Twitter logo"/>
        </Link> 
            
        <Link href="https://github.com/ejero" target="_blank" >
            <Image  className={styles.iconSvg} src={github} alt="GitHub logo"/>
        </Link>

        <Link href="https://www.linkedin.com/in/rosita-emakpo/" target="_blank" >  
        <Image className={styles.iconSvg} src={ln} alt="LinkedIn logo"/>

        </Link>    
            <Link href="mailto:rosita@rosita.tech" target="_blank">
            <Image className={styles.iconSvg} src={mail} alt="email icon" />
        </Link>
        
        </div>
        
        <Image src={logo} 
            height={50}
            width={200}
        />
        <p className={styles.rights}>&#169;2022 Kinky roots, LLC, All rights lorem ipsum ullamco laboris nisi </p>
    </div>





    </footer>
    </>
)
}
