import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sunIcon from '../../assets/sun.svg'
import moonIcon from '../../assets/moon.svg'
import instagrammLight from '../../assets/icons8-instagram.svg'
import instagrammDark from '../../assets/icons8-instagram.dark.svg'
import gitHubLight from '../../assets/github-light.svg'
import gitHubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/CV.pdf'
import { useTheme } from '../../common/ThemeContext'

const Hero = () => {
    const {theme, toggleTheme} = useTheme()

    const themeIcon = theme ===  'light' ? sunIcon : moonIcon
    const instagrammIcon = theme ===  'light' ? instagrammLight : instagrammDark
    const gitHubIcon = theme ===  'light' ? gitHubLight : gitHubDark
    const linkedinIcon = theme ===  'light' ? linkedinLight : linkedinDark

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero} 
        src={heroImg} 
        alt="Profile picture of Oleksandr Liashenko" />
        <img 
        className={styles.colorMode} 
        src={themeIcon} 
        alt="Color mode icon" 
        onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
        <h1>Oleksandr
            <br/>
             Liashenko</h1>
             <h2>FullStack Developer</h2>
             <span className={styles.description}>
                <a href="https://www.instagram.com/s_s_sasha19/" target="_blank">
                    <img src={instagrammIcon} alt="Instagram icon" />
                </a>
                <a href="https://github.com/AlexLiashenko19" target="_blank">
                    <img src={gitHubIcon} alt="GitHub icon" />
                </a>
                <a href="https://www.linkedin.com/in/oleksandr-liashenko/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
                <p>
                Highly motivated and enthusiastic junior full-stack developer with a strong passion for building innovative web applications.
                </p>
             </span>
                <a href={CV} download>
                    <button className="hover">
                        Resume
                    </button>
                </a>
        </div>
    </section>
  )
}

export default Hero
