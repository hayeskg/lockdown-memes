import Head from 'next/head';
import * as React from 'react';
import styles from '../styles/Home.module.css';
import {getMeme, getQuote} from '../pages/api/memes';


export default function Home() {
  const [meme, setMeme] = React.useState('')
  const [quote, setQuote] = React.useState('')

  function handleMemeClick(){
    getMeme().then((result)=>{
      setMeme(result)
    });
  }
  function handleQuoteClick(){
    getQuote().then((result)=>{
      setQuote(result)
    });
  }

  React.useEffect(() => {
    // Update the document title using the browser API
    handleMemeClick();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Lockdown Memes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey Delphine!
        </h1>
        <p className={styles.description}>
          Don't worry, confinement is only temporary and just a state of mind!
        </p>
        <p className={styles.description}>
          When you need feel the need to numb the pain, hit the buttons below for a source of positivity:
        </p>
          <button className={styles.card} onClick={handleQuoteClick}>
            <h3>WISDOM</h3>
          </button>
          <h2>2020...{' '}{quote}</h2>
           <button className={styles.card} onClick={handleMemeClick}>
            <h3>MEMES</h3>
          </button>
          <img src={meme} alt='a meme'/>
      </main>
      <footer className={styles.footer}>
          Built with {<span>❤️</span>} by Kristof
      </footer>
    </div>
  )
}
