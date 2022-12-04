import React, { useEffect } from 'react'
import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css"
import TextTransition, { presets } from 'react-text-transition'
import MenuItem from '../components/MenuItem';
import CommitItem from '../components/CommitItem';
import Head from 'next/head';

const QUERY = gql`
query MyQuery {
  newBuildCreateds(orderBy: blockTimestamp, orderDirection: desc, first: 3) {
    build_branch
    build_developer
    build_cid
    repository_name
    repository_owner
    transactionHash
    build_commitMessage
    blockTimestamp
  }
}
`;
const TEXTS = [
  "Sadaiv",
  "सदैव",
  "Forever"
];

function App() {
  const { data, loading, error } = useQuery(QUERY);
  const [index, setIndex] = React.useState(0);

  console.log(data)
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={styles.App}>
      <Head>
        <title>Sadaiv CI: Backup your Repositories on Filecoin Network</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.logo}><div className="logoItem"><TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition> Continous Integration</div></h1>
      </header>
      <div className={styles.MenuBar}>
        <MenuItem title='About' onClick={() => { }} />
        <MenuItem title='Installation' onClick={() => window.location.href = "https://github.com/sadaiv-ci/sadaiv-ci#setting-up"} />
        <MenuItem title='GitHub' onClick={() => window.location.href = "https://github.com/sadaiv-ci"} />
      </div>
      <div style={{ display: 'flex', flex: 1 }} />

      <div className={styles.content}>
        {data && data['newBuildCreateds'].map((item: any) => {
          return <CommitItem item={item} onClick={() => window.location.href = "https://github.com/" + item['repository_name']} />
        })}

      </div>
    </div>
  )
}

export default App