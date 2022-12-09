import styles from './Contact-Form.module.css'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setSeconds from "date-fns/setSeconds";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";

function ContactForm(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [service, setService] = useState('cut')
    const [date, setDate] = useState(new(Date))
    const [message, setMessage] = useState('')

    return (
        <div className={styles.formContainer}>
                <h2>Scheudle an appointment</h2>
            <form class={styles.formInput}>

                <div className={styles.name}>
                <input class={styles.formInput} type='text'
                placeholder= 'First name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />

                <input class={styles.formInput} type='text'
                placeholder= 'Last name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
                </div>


                <input class={styles.formInput} type='email'
                placeholder= 'Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

                <select class={styles.formInput}
                value={service}
                onChange={(e) => {
                    setService(e.target.value)
                }}
                >
                <option class={styles.formInput} value='cut'>cut</option>
                <option class={styles.formInput} value='color'>color</option>
                <option class={styles.formInput} value='shampoo'>shampoo</option>
                <option class={styles.formInput} value='perm'>perm</option>
                <option class={styles.formInput} value='braid'>braid</option>
                <option class={styles.formInput} value='curly cut'>curly cut</option>
                <option class={styles.formInput} value='consultation'>consultation</option>
                </select>

                <DatePicker className={styles.formInput}
                    // Uncomment to disable future dates 
                    // filterDate={d => {
                    //     return new Date() > d;
                    // }}
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

                <button class={styles.formInput}>Submit Form</button>

            </form>    
            </div>
    )
}


export default ContactForm