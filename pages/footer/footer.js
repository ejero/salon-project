import styles from './Footer.module.css'
import Image from 'next/image'
import logo from '../../public/images/logo/kr-logo6.png'
import Link from 'next/link'
import twitter from './twitter.png'
import github from './github-mark-white.png'
import ln from './In-White-96.png'
import mail from './mail2.svg'


export default function Footer(){
return(
    <>
    <footer>
    <div className={styles.footer}>
        <div className={styles.icons}>

        <Link href="https://twitter.com/lovelittlerose" target="_blank" >
            <Image className={styles.iconSvg} alt="Twitter logo" src={twitter} />
        </Link> 
            
        <Link href="https://github.com/ejero" target="_blank" >
            <Image  className={styles.iconSvg} alt="GitHub logo" src={github} />
        </Link>

        <Link href="https://www.linkedin.com/in/rosita-emakpo/" target="_blank" >  
        <Image className={styles.iconSvg} alt="LinkedIn logo" src={ln} />

        </Link>    
            <Link href="mailto:rosita@rosita.tech" target="_blank">
            <Image className={styles.iconSvg} alt="email icon" src={mail}  />
        </Link>
        
        </div>
        
        <Image 
            alt="Kinky Roots Logo"
            src={logo} 
            height={50}
            width={200}
        
        />
        <p className={styles.rights}>&#169;2022 Kinky roots, LLC, All rights lorem ipsum ullamco laboris nisi </p>
    </div>





    </footer>
    </>
)
}
