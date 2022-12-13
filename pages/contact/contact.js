import styles from './Stylist.module.css'
import Image from "next/image"
import april from "../../public/images/stylist/April.jpg"

export default function Stylist(){
    return (<>
    <div className={styles.wrapper}>

        <ul>
            <li className={styles.slide}>
                <p>April Jones</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <Image src={april}
                height={350}
                />
            </li>
        

        </ul>
    </div>
    </> )
}