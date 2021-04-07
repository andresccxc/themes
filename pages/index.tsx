/** @jsx jsx */
/** @jsxRuntime classic */ 

import { useEffect, useContext } from 'react';
import { AppContext } from '../context/context';
import axios from 'axios';
import { jsx } from '@emotion/react'
import {path} from '../paths/path';
import dynamic from "next/dynamic";
import {themeOne} from '../JsonsExamples/ThemeOne';
import {themeTwo} from '../JsonsExamples/themeTwo';

const Header = dynamic(()=>import('../themes/header-one/HeaderOne'));

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
    <div css={theme && theme[0]?.style}>
      {<Header title={theme && theme[0]?.content.description} />}
      <button onClick={()=>setTheme(themeOne)}>Cambiar tema 1</button>
      <button onClick={()=>setTheme(themeTwo)}>Cambiar tema 2</button>
    </div>
  )
}
