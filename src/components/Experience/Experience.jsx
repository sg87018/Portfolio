import React from 'react';
import styles from './Experience.module.css';
import skills  from '../../data/skills.json';
import history from '../../data/history.json';

// 1) Glob top‑level assets (relative from this file)
//    Note: use import.meta.glob with { eager: true, as: 'url' } instead of globEager
const historyImages = import.meta.glob('../../../assets/history/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });
const skillImages   = import.meta.glob('../../../assets/skills/*.{png,jpg,jpeg,svg}',  { eager: true, as: 'url' });

// 2) Build filename → URL maps
const historyImageMap = Object.fromEntries(
  Object.entries(historyImages).map(([path, url]) => {
    const fileName = path.split('/').pop();
    return [fileName, url];
  })
);
const skillImageMap = Object.fromEntries(
  Object.entries(skillImages).map(([path, url]) => {
    const fileName = path.split('/').pop();
    return [fileName, url];
  })
);

export function Experience() {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>

        {/* Skills */}
        <div className={styles.skills}>
          {skills.map((skill, i) => {
            const fileName = skill.imageSrc.split('/').pop();
            const src      = skillImageMap[fileName] || '';
            return (
              <div className={styles.skill} key={i}>
                <div className={styles.skillImageContainer}>
                  <img src={src} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        {/* History */}
        <ul className={styles.history}>
          {history.map((item, i) => {
            const fileName = item.imageSrc.split('/').pop();
            const src      = historyImageMap[fileName] || '';
            return (
              <li className={styles.historyItem} key={i}>
                <img src={src} alt={`${item.organization} Logo`} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${item.role}, ${item.organization}`}</h3>
                  <p>{`${item.startDate} - ${item.endDate}`}</p>
                  <ul>
                    {item.experiences.map((exp, j) => (
                      <li key={j}>{exp}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}
