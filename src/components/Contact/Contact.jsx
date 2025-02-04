import React from "react";

import styles from "./Contact.module.css";
import linkedin from "/assets/contact/linkedinIcon.png";
import email from "/assets/contact/emailIcon.png";
import github from "/assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:jayadhanushravichandran@gmail.com">jayadhanushravichandran@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/jayadhanush-ravichandran/">jayadhanush-ravichandran</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://www.github.com/jayadhanush/">github.com/jayadhanush</a>
        </li>
      </ul>
    </footer>
  );
};