/** @jsx jsx */
/** @jsxRuntime classic */ 

import { useEffect, useContext } from 'react';
import { AppContext } from '../context/context';
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { jsx } from '@emotion/react'


export default function Home() {
  const { theme, setTheme } = useContext(AppContext);

  useEffect(() => {
    const getTheme = async () => {
      const { data } = await axios('http://localhost:3000/api/themes');
      setTheme(data);
    }
    getTheme();
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header css={{
        backgroundColor: 'hotpink',
        '&:hover': {
          color: 'lightgreen'
        }
      }}>
        HEADER
      </header>

    </div>
  )
}
