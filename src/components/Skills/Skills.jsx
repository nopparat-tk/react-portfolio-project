import React from 'react'
import styles from './Skills.module.css'
import { FaHtml5, FaCss3Alt, FaSquareJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa6";
import { SiAdobelightroomclassic, SiAdobeillustrator, SiAdobephotoshop, SiNodered } from "react-icons/si";


function Skills() {
   return (
      <div className={styles.skills_con}>
         <h3 className={styles.skills_title}>Developers Skills Set</h3>
         <ui className={styles.skills_list}>
            <li>
               <FaHtml5 />
            </li>
            <li>
               <FaCss3Alt />
            </li>
            <li>
               <FaSquareJs />
            </li>
            <li>
               <FaReact />
            </li>
            <li>
               <FaNodeJs />
            </li>
            <li>
               <SiNodered />
            </li>
         </ui>

         <h3 className={styles.skills_title}>Graphics Skills Set</h3>
         <ui className={styles.skills_list}>
            <li>
               <SiAdobephotoshop />
            </li>
            <li>
               <SiAdobeillustrator />
               </li>
            <li>
               <SiAdobelightroomclassic />
            </li>
            <li>
               <FaFigma />
            </li>
         </ui>
      </div>
   )
}

export default Skills
