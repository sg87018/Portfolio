import React from 'react';
import styles from './About.module.css';
import aboutIcon from '../../../assets/about/aboutIcon.png';
import cursorIcon from '../../../assets/about/cursorIcon.png';
import serverIcon from '../../../assets/about/serverIcon.png';
import uiIcon from '../../../assets/about/uiIcon.png';

export const About = () => {
    return (
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img 
            src={aboutIcon} 
            alt="Me sitting with a laptop"
            className={styles.aboutImage} 
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={cursorIcon} alt='cursor icon' />
                <div>
                    <h3>Frontend Developer</h3>
                    <p>I have experience in building responive and optimized sites</p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={serverIcon} alt='server icon' />
                <div>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimized back-end systems and APIs</p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={uiIcon} alt='ui icon' />
                <div>
                    <h3>UI Designer</h3>
                    <p>I have designed multiple landing pages and have created design systems as well</p>
                </div>
            </li>

          </ul>
        </div>
      </section>
    );
  };
