import React from 'react';
import styles from './Projects.module.css';
import projects from '../../data/projects.json';

// 1) Glob all images in top‑level assets/projects folder
const projectsImages = import.meta.glob('../../../assets/projects/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });

// 2) Build a filename → URL lookup map
const projectsImageMap = Object.fromEntries(
  Object.entries(projectsImages).map(([path, url]) => {
    const fileName = path.split('/').pop();
    return [fileName, url];
  })
);

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          // Extract filename from JSON and look up the real URL
          const fileName = project.imageSrc.split('/').pop();
          const src = projectsImageMap[fileName] || '';

          return (
            <div className={styles.container1} key={id}>
              <img
                src={src}
                alt={`Image of ${project.title}`}
                className={styles.image}
              />
              <h3 className={styles.title1}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.skills}>
                {project.skills.map((skill, idx) => (
                  <li key={idx} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
              <div className={styles.links}>
                <a href={project.demo} className={styles.link}>
                  Demo
                </a>
                <a href={project.source} className={styles.link}>
                  Source
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
