import React from "react";

import styles from "./Hero.module.css";
import heroImage from "/assets/hero/HeroImage.jpg"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Jayadhanush here!</h1>
        <p className={styles.description}>
        I'm a 3rd-year AI & DS student at Kongu (KEC), passionate about full-stack development. I have experience in building website and enjoy working on projects .
         Reach out if you'd like to collaborate or learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};