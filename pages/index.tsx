import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Warp 💫</title>
        <meta
          name="Warp Token"
          content="An experimental crypto art project, in conjunction with Rug Research"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: 12,
          }}
        >
          <ConnectButton />
        </div>
        

        <h1 className={styles.title}>
          Welcome to <a href="">Warp</a> {' '}
        </h1>

        <p className={styles.description}>
          An experimental crypto art project.
        </p>

        <div className={styles.grid}>
          <a href="about" className={styles.card}>
            <h2>What is Warp? &rarr;</h2>
            <p>Learn about how warp works and how you get warps.</p>
          </a>
          <a href="start" className={styles.card}>
            <h2>Click to start the mayhem &rarr;</h2>
            <p>Someone has to get this party started.</p>
          </a>
          <a href="rugs" className={styles.card}>
            <h2>Claim with SudoRugs NFTs &rarr;</h2>
            <p>See if you're eligible to claim warps.</p>
          </a>
          <a href="claim" className={styles.card}>
            <h2>Claim with ETH &rarr;</h2>
            <p>Grab warps before we take off, and it's too late.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="http://www.rugresearch.wtf/" target="_blank" rel="noopener noreferrer">
          Made in 🤝 with Rug Research
        </a>
      </footer>
    </div>
  );
};

export default Home;
