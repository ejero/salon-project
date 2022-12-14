import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import img from '../public/images/kinkyroots.png'
import Link from 'next/link';
import ContactForm from './form/form'
import ChatwootWidget from '../components/ChatwootWidget'

export default function Home() {  
  function WelcomeMessage(){
    return (
      <>
      <div className={styles.nameWrapper}>
        <h1 className={styles.message} >The <span className={styles.best}>best</span> natural hair salon expience in town</h1>
        <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequate</p>
        <p className={styles.btn}><Link href="#formID">Request an appointment</Link></p>
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
          priority={true}
          />
      </>
    )
  }


  return ( 
      <>
      <Head>
      </Head>

        <div className={styles.flex}>
          <WelcomeMessage />
          <div className={styles.flexinner}>
            <DispalyImg />
          </div>
        </div>
        <ContactForm />
        <ChatwootWidget />
      </>
  )
}