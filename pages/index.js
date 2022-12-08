import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from './nav-bar/nav-bar'
import img from '../public/images/stylist/kinkyroots.png'
import Link from 'next/link';


export default function Home() {  
  function WelcomeMessage(){
    return (
      <>
      <div className={styles.nameWrapper}>
        <h1 className={styles.message} >The <span class={styles.best}>best</span> natural hair salon expience in town</h1>
        <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        <p className={styles.btn}><Link href="../appointments/appointments">Request an appointment</Link></p>
      </div>
      </>
    )
  }

  function DispalyImg(){
    return(
      <>
        <Image className={styles.img} src={img}
          alt="main stylist" 
          width="600"
          height="760"
          />
      </>
    )
  }


  function Footer(){
    return(
      <>
      <footer>
        <p className={styles.footer}>Hi</p>
      </footer>
      </>
    )
  }


  return ( 
      <>
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link> 
        <Link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@600;800&display=swap" rel="stylesheet"></Link>
      </Head>

      <NavBar />
        <div className={styles.flex}>
          <WelcomeMessage />
          <div className={styles.flexinner}>
            <DispalyImg />
          </div>
        </div>
        <Footer />
      </>
  )
}