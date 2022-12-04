import styles from "../styles/Home.module.css"

const MenuItem = ({ title, link }: { title: string, link: string }) => {
  return <a href={link}><div className={styles.menuItem}>
    {title}
  </div></a>
}

export default MenuItem