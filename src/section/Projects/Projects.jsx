import ProjectCard from '../../common/ProjectCard'
import styles from './Projects.Styles.module.css'
import cinemania from '../../assets/viberr.png'
import cryptoApp from '../../assets/icons8-crypto-256.png'
import fitnes from  '../../assets/fitlift.png'


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
        <ProjectCard 
        src={fitnes}
        link="https://fitness-application-azure.vercel.app/"
        h3="Fitnes App"
        p="Fitnes App"
        />
      </div>
    </section>
  )
}


export default Projects
