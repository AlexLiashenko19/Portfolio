import styles from './FooterStyles.module.css'

const Footer = () => {
  return (
    <section id='footer' className={styles.container}>
      <p>
        &copy; 2025 Oleksandr Liashenko. <br/>
        All rights reserved.
        </p>
    </section>
  )
}

export default Footer
