import styles from './Services.module.css'
import Image from 'next/image'
import pic1 from '../../public/images/haircut.jpg'
import pic2 from '../../public/images/hair-color.jpg'
import pic3 from '../../public/images/prof_lady.jpg'

export default function Services(){
    return (<>
        <div className={styles.outter}>

        
        <div className={styles.firstContainer}>
            <Image alt="Man cutting hair" className={styles.img} src={pic1}
                    width={400}
                    height={550}
                />

            <div className={`${styles.img} ${styles.right}`}>
                <p className={styles.banner}>Why choose us</p>
                <h1 className={styles.welcome}>Exceptional services at each visit for all curl types</h1>
                <p className={styles.comment}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. oluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat </p>


                <div className={styles.innerContainer}>
                    <p className={styles.item}>patient</p>
                    <p className={styles.item} >consistent</p>
                    <p className={styles.item}>licenced</p>
                    <p className={styles.item}>insured</p>
                </div>
            </div>
        </div>

        <div className={styles.firstContainer}>
            
            <div className={`${styles.img} ${styles.right}`}>
                <p className={styles.banner}>Services</p>
                <h1 className={styles.welcome}>Let us style your wonderful curls</h1>
                <p className={styles.comment}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. oluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat </p>


                <div className={styles.innerContainer}>
                    <p className={styles.item}>scalp analysis</p>
                    <p className={styles.item}>consultations</p>
                    <p className={styles.item}>Hair Transplant</p>
                    <p className={styles.item}>Braids</p>
                </div>
            </div>

            <Image alt="hair dye solution" className={styles.img} src={pic2}
                    width={400}
                    height={550}
                />
        </div>



        <div className={styles.firstContainer}>
            <Image alt="Black lady sitting at table" className={styles.img} src={pic3}
                    width={400}
                    height={550}
                />

            <div className={`${styles.img} ${styles.right}`}>
                <p className={styles.banner}>First time clients get 10% off</p>
                <h1 className={styles.welcome}>Exceptional services at each visit for all curl types</h1>
                <p className={styles.comment}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. oluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat </p>

                <div className={styles.innerContainer}>
                    <p className={styles.item}>Weddings</p>
                    <p className={styles.item}>Patries</p>
                    <p className={styles.item}>School events</p>
                    <p className={styles.item}>Anniversaries</p>
                </div>
            </div>
            </div>


        </div>
    </> )
}

