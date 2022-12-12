import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from './nav-bar/nav-bar'
import img from '../public/images/kinkyroots.png'
import Link from 'next/link';
import ContactForm from './form/form'
import React, { Fragment } from 'react'
import ChatwootWidget from '../components/ChatwootWidget'

export default function Home() {  
  function WelcomeMessage(){
    return (
      <>
      <div className={styles.nameWrapper}>
        <h1 className={styles.message} >The <span className={styles.best}>best</span> natural hair salon expience in town</h1>
        <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
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
          priority
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
      </Head>

      <NavBar />
        <div className={styles.flex}>
          <WelcomeMessage />
          <div className={styles.flexinner}>
            <DispalyImg />
          </div>
        </div>
        <ContactForm />
        <ChatwootWidget />
        <Footer />
      </>
  )
}