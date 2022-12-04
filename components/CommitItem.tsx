import styles from "../styles/Home.module.css"
import { BranchesOutlined } from '@ant-design/icons'

const CommitItem = ({ item, onClick }: { item: any, onClick: () => void }) => {
  const date = new Date(Number.parseInt(item["blockTimestamp"]) * 1000);
  return <div className={styles.commitItem}>
    <span className={styles.dateTime}>{date.toDateString() + " " + date.toLocaleTimeString()}</span>
    <div className={styles.tile}>
      <span style={{ fontWeight: 'w500' }}>{item['build_commitMessage']}</span><br />
      <div className={styles.branchDetails}>
        <BranchesOutlined color="white" /> {item['build_branch']} - {item['repository_name']}
      </div>
      <div className={styles.branchDetails}>
        <div onClick={() => window.location.href = "https://" + item['build_cid'] + ".ipfs.w3s.link"} className={styles.subLink}> IPFS </div><div onClick={() => window.location.href = "https://mumbai.polygonscan.com/tx/" + item['transactionHash']} className={styles.subLink}> Polygon Scan </div><div onClick={() => window.location.href = "https://github.com/" + item['repository_name']} className={styles.subLink}> GitHub </div>
      </div>
    </div>
  </div>
}

export default CommitItem