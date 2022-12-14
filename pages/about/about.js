import styles from './About.module.css'
import Image from 'next/image'
import owner from '../../public/images/stylist/owners3.png'


export default function About(){
    return (
    <> 
    <div className={styles.container} >


        <div className={`${styles.item} ${styles.inner}`}>
                <h1 className={`${styles.innerItem} ${styles.head1}`}>Kinky Roots</h1> 
                <h2 className={`${styles.innerItem} ${styles.head2}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2> 

                <p className={styles.innerItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>

                <p className={styles.innerItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in quis</p>

            </div>


            <div className={`${styles.item} ${styles.img}`}>
                <Image src={owner} className={styles.img} alt="Picture of three owners of the Hair salon"/>
            </div>
        </div>     
    </> )
}

