import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from "react-icons/fa6";

function Contact() {
   return (
      <div className={styles.contact_wrapper}>
         <div className={styles.contact_con}>
            <div className={styles.contact_info}>
               <h3 className={styles.contact_title}>Get in touch</h3>
               <p className={styles.contact_desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus alias rerum hic fugit iste eveniet. Deleniti voluptas rem voluptatibus exercitationem, repellat hic quo? Mollitia minima architecto, omnis id dolore porro!
               </p>
               <p className={styles.contact_address}>
                  331 Nong Phueng Saraphi Chaingmai
               </p>
               <p><FaPhone /> 062 198 9619</p>
               <p><FaEnvelope /> nopparat.tk@gmail.com</p>
            </div>
            <div className={styles.contact_form}>
               <form action="">
                  <div className={styles.input_group}>
                     <div>
                        <label htmlFor="first name">First Name</label>
                        <input type="text" placeholder='eg. John' />
                     </div>
                     <div>
                        <label htmlFor="last name">Last Name</label>
                        <input type="text" placeholder='eg. Doe' />
                     </div>
                  </div>
                  <label htmlFor="email address">Email Address</label>
                  <input type="email" placeholder='eg. 0Dl5z@example.com' />
                  <label htmlFor="message">Your Message</label>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Enter your message'></textarea>
                  <button type='submit'>Submit</button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Contact
