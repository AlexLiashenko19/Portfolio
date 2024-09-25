import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

const Skills = () => {
  return (
    <section className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillsList}>
        <SkillList icon={checkMarkIcon} skill='HTML'/>
        <SkillList icon={checkMarkIcon} skill='CSS'/>
        <SkillList icon={checkMarkIcon} skill='JavaScript'/>
        <SkillList icon={checkMarkIcon} skill='TypeScript'/>
        <SkillList icon={checkMarkIcon} skill='React'/>
        <SkillList icon={checkMarkIcon} skill='Node'/>
      </div>
      <hr/>
      <div className={styles.skillsList}>
        <SkillList icon={checkMarkIcon} skill='Redux'/>
        <SkillList icon={checkMarkIcon} skill='Webpack'/>
        <SkillList icon={checkMarkIcon} skill='Git'/>
        <SkillList icon={checkMarkIcon} skill='Jest'/>
        <SkillList icon={checkMarkIcon} skill='Tailwind'/>
        <SkillList icon={checkMarkIcon} skill='SQL/NoSQL'/>
      </div>
    </section>
  )
}

export default Skills
