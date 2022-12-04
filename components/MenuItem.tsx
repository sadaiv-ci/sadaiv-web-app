import styles from "../styles/Home.module.css"

const MenuItem = ({ title, onClick }: { title: string, onClick: () => void }) => {
  return <div onClick={onClick} className={styles.menuItem}>
    {title}
  </div>
}

export default MenuItem