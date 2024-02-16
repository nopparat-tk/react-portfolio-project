import React from 'react'
import styles from './Testimon.module.css'
function Testimon() {
   return (
      <div className={styles.testimon_con}>
         <h3 className={styles.testimon_title}>Testimonials</h3>
         <div className={styles.testimon_list}>
            <div className={styles.testimon_item}>
               <p>
                  Facilis dicta corrupti necessitatibus nisi sunt, veniam maiores corporis dolorem consectetur a nam, cupiditate iste quam fugit.
               </p>
               <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
               <h4>John Doe</h4>
               <p className={styles.bio}>CEO of Company</p>
            </div>

            <div className={styles.testimon_item}>
               <p>
                  Illo quas, officiis iste aliquid, non labore accusantium incidunt culpa quam, at consectetur aliquam aperiam. Eligendi reprehenderit porro.
               </p>
               <img src="https://images.unsplash.com/photo-1567784177951-6fa58317e16b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
               <h4>Mike Dean</h4>
               <p className={styles.bio}>Personal Trainer</p>
            </div>

            <div className={styles.testimon_item}>
               <p>
                  Mollitia nesciunt beatae optio doloremque tempora, hic quod perspiciatis minima. Magnam incidunt animi minima voluptas fuga saepe alias quos.
               </p>
               <img src="https://plus.unsplash.com/premium_photo-1672046218033-2b624d63390f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxtYW58ZW58MHx8MHx8fDA%3D" alt="" />
               <h4>Bruce Sigmund</h4>
               <p className={styles.bio}>Business Owner</p>
            </div>
         </div>
      </div>
   )
}

export default Testimon
