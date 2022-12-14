import styles from './Stylist.module.css'
import Image from "next/image"
import april from "../../public/images/stylist/April.jpg"
import james from "../../public/images/stylist/James.jpg"
import sarah from "../../public/images/stylist/sarah2.jpg"
import jackie from "../../public/images/stylist/Jackie.jpg"
import monica from "../../public/images/stylist/Monica.jpg"
import jamal from "../../public/images/stylist/Jamal.jpg"
import peter from "../../public/images/stylist/Peter.jpg"
import noel from "../../public/images/stylist/Noel.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



export default function Stylist(){


    return (
    <>  
        <div className={styles.container}>
        <Carousel className={styles.CarouselContainer}
        useKeyboardArrows={true}
        infiniteLoop={true}
        >
                <div className={styles.item}>
                    <div className={styles.imgTitle}>
                        <h3 className={`${styles.txt} ${styles.h3txt} `}>April</h3>
                        <p className={`${styles.txt} ${styles.ptag}`}>Speciality: Color</p> 
                    </div>
                    <Image className={`${styles.img}`} src={april} alt="woman with Amazing afro"/> 
                    
                </div> 
            

            <div className={styles.item}>
                <div className={styles.imgTitle}>
                    <h3 className={`${styles.txt} ${styles.h3txt} `} >James</h3>
                    <p className={`${styles.txt} ${styles.ptag}`}>Speciality: Barber</p>
                </div>
                <Image className={`${styles.img}`} src={james} alt="woman with Amazing afro"/> 
                
            </div>
                

            <div className={styles.item}>
                <div className={styles.imgTitle}>
                    <h3 className={`${styles.txt} ${styles.h3txt} `}>Sarah</h3>
                    <p className={`${styles.txt} ${styles.ptag}`}>Speciality: Natural Hair</p>
                </div>
                <Image className={`${styles.img}`} src={sarah} alt="woman with Amazing afro"/> 
            </div>


            <div className={styles.item}>
                <div className={styles.imgTitle}>
                    <h3 className={`${styles.txt} ${styles.h3txt} `}>Jackie</h3>
                    <p className={`${styles.txt} ${styles.ptag}`}>Speciality: Natural Hair</p>
                </div>
                <Image className={`${styles.img}`} src={jackie} alt="woman with Amazing afro"/> 
            </div>
            

            <div className={styles.item}>
                <div className={styles.imgTitle}>
                    <h3 className={`${styles.txt} ${styles.h3txt}`} >Monica</h3>
                    <p className={`${styles.txt} ${styles.ptag}`}>Speciality: Cosmetologist </p>
                </div>
                <Image className={`${styles.img}`} src={monica} alt="woman with Amazing afro"/> 
            </div>

            <div className={styles.item}>
                <div className={styles.imgTitle}>
                    <h3 className={`${styles.txt} ${styles.h3txt}`}  >Jamal</h3>
                    <p className={`${styles.txt} ${styles.ptag}`}>Speciality: Cosmetologist</p>
                </div>
                <Image className={`${styles.img}`} src={jamal} alt="woman with Amazing afro"/> 
            </div>


            <div className={styles.item}>
                <div className={styles.imgTitle}>
                    <h3 className={`${styles.txt} ${styles.h3txt}`}  >Peter</h3>
                    <p className={`${styles.txt} ${styles.ptag}`}>Speciality: Barber</p>
                </div>
                <Image className={`${styles.img}`} src={peter} alt="woman with Amazing afro"/> 
            </div>


            <div className={styles.item}>
                <div className={styles.imgTitle}>
                    <h3 className={`${styles.txt} ${styles.h3txt}`}>Noel</h3>
                    <p className={`${styles.txt} ${styles.ptag}`}>Speciality: Barber</p>
                </div>
                <Image className={`${styles.img}`} src={noel} alt="woman with Amazing afro"/> 
            </div>

            </Carousel>
        </div>
</> 
)}

