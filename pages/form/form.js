import styles from './Contact-Form.module.css'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image'
import afro from '../../public/images/afro.jpg'
import chair from '../../public/images/salon-chair.jpg'



function ContactForm(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [service, setService] = useState('cut')
    const [date, setDate] = useState(new(Date))
    const [message, setMessage] = useState('')


    return (
    <>
        <div id="formID" className={styles.pageStyle}>
        <Image className={styles.img} src={chair} alt="salon chairs" />
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <p>Can not wait to see you!</p>
                <input className={styles.formInput} type='text'
                placeholder= 'First name'
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)} />

                <input className={styles.formInput} type='text'
                placeholder= 'Last name'
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)} />
            


                <input className={styles.formInput} type='email'
                placeholder= 'Email'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)} />

                <select className={styles.formInput}
                value={service}
                required
                onChange={(e) => {
                    setService(e.target.value)
                }}
                >
                <option className={styles.formInput} value='cut'>CUT</option>
                <option className={styles.formInput} value='color'>COLOR</option>
                <option className={styles.formInput} value='shampoo'>SHAMPOO</option>
                <option className={styles.formInput} value='perm'>PERM</option>
                <option className={styles.formInput} value='braid'>BRAID</option>
                <option className={styles.formInput} value='curly cut'>CURLY CUT</option>
                <option className={styles.formInput} value='consultation'>CONSULTATION</option>
                </select>

                <DatePicker className={styles.formInput}
                    // Uncomment to disable future dates 
                    // filterDate={d => {
                    //     return new Date() > d;
                    // }}
                    required
                    placeholderText="Select appt Date"
                    selected={date}
                    onChange={(date) => setDate(date)}
                    isClearable ={true}
                    dateFormat="Pp"
                    showTimeSelect
                />

                <textarea className={styles.formInput} type='text'
                placeholder= 'message'
                value={message}
                onChange={(e) => setMessage(e.target.value)} />

                <button className={styles.btn}>Submit Form</button>

            </form> 
            </div>   
            </div>
        </>
    )
}


export default ContactForm