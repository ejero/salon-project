import styles from './Contact-Form.module.css'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setSeconds from "date-fns/setSeconds";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
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
        {/* <h2>Scheudle an appointment</h2> */}
        <div className={styles.pageStyle}>
        <Image className={styles.img} src={chair} alt="salon chairs" />
        <div className={styles.formContainer}>
            <form class={styles.form}>
                <p>Can't wait to see you!</p>
                <input class={styles.formInput} type='text'
                placeholder= 'First name'
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)} />

                <input class={styles.formInput} type='text'
                placeholder= 'Last name'
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)} />
            


                <input class={styles.formInput} type='email'
                placeholder= 'Email'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)} />

                <select class={styles.formInput}
                value={service}
                required
                onChange={(e) => {
                    setService(e.target.value)
                }}
                >
                <option class={styles.formInput} value='cut'>Cut</option>
                <option class={styles.formInput} value='color'>Color</option>
                <option class={styles.formInput} value='shampoo'>Shampoo</option>
                <option class={styles.formInput} value='perm'>Perm</option>
                <option class={styles.formInput} value='braid'>Braid</option>
                <option class={styles.formInput} value='curly cut'>Curly cut</option>
                <option class={styles.formInput} value='consultation'>Consultation</option>
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