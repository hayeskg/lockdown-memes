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
          Don't worry, confinement is only temporary and 'just' a state of mind!
        </p>
        <p className={styles.description}>
          When you feel the need to numb your brain, hit the buttons below for a source of pointless rubbish.
        </p>
          <button className={styles.button} onClick={handleQuoteClick}>
            <h3>WISDOM</h3>
          </button>
          <div className={styles.quote}>
            <h2>2020...{' '}{quote}</h2>
          </div>
          <button className={styles.button} onClick={handleMemeClick}>
            <h3>MEME</h3>
          </button>
          <div className={styles.meme}>
            <img src={meme} alt='a meme' />
          </div>
      </main>
      <footer className={styles.footer}>
        <>
          <p>Beating lockdown since 2020</p>
          <p>{<span>❤️</span>}</p> 
        </>
      </footer>
    </div>
  )
}
