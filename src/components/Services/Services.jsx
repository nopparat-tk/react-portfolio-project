import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaDesktop, FaMobileAlt } from 'react-icons/fa'

function Services() {
   return (  
      <div>
         <div className={styles.services_con}>
            <h3 className={styles.services_title}>MY Services</h3>
            <div className={styles.services_list}>
               <div className={styles.services_items}>
                  < FaCode/>
                  <h4>Web Development</h4>
                  <p>
                     Exercitationem quae ad quam voluptates sapiente quos fugit itaque. Voluptatibus amet itaque voluptates beatae quidem voluptatem, repudiandae vel quos repellendus error ab!
                  </p>
               </div>

               <div className={styles.services_items}>
                  < FaDesktop/>
                  <h4>Front-end Development</h4>
                  <p>
                     Officia id fuga sint ipsa mollitia qui in, quaerat quod distinctio eos esse temporibus ipsam nisi molestiae quibusdam dolores alias culpa eum?
                  </p>
               </div>

               <div className={styles.services_items}>
                  < FaMobileAlt/>
                  <h4>Mobile Responsive</h4>
                  <p>
                     Natus sunt ipsam quam blanditiis architecto dolore fugiat vero assumenda inventore voluptas, excepturi quod quasi maiores nemo, quisquam obcaecati aliquid? Eligendi, dolorum!
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Services
