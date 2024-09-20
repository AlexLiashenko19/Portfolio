import ProjectCard from '../../common/ProjectCard'
import styles from './Projects.Styles.module.css'
import cinemania from '../../assets/viberr.png'
import cryptoApp from '../../assets/icons8-crypto-256.png'

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard 
        src={cinemania}
        link="https://andre29839.github.io/error-404_team_name_not_found/"
        h3="Cinemania"
        p="Cinema App"
        />
        <ProjectCard 
        src={cryptoApp}
        link="https://crypto-app-three-alpha.vercel.app/"
        h3="Cryptiks"
        p="Crypto App"
        />
      </div>
    </section>
  )
}

export default Projects
