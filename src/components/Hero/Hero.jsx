import React from 'react';
import styles from './Hero.module.css';
import heroImage1 from '../../../assets/hero/heroImage1.png';

export const Hero = () => {
  return ( 
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm Saketh
        </h1>
        <p className={styles.description}>
            I'm an undergrad at Georgia Tech majoring 
            in Computer Science, with concentrations in
            People and Media. I am eager to deepen my skills
            in software engineering and am seeking opportunities to
            explore and grow in these areas.
        </p>
        <a href="mailto:sakethgudla04@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={heroImage1} alt="Hero image of me" className={styles.heroImg}></img>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
