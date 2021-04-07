/** @jsx jsx */
/** @jsxRuntime classic */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setTheme } from '../redux/themes/actions';
import { jsx } from '@emotion/react'

export default function Home() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: any) => state.theme);

  useEffect(() => {
    const getTheme = async () => {
      const { data } = await axios('http://localhost:3000/api/themes');
    }
    getTheme();
  }, []);

  const changeTheme = () => {
    dispatch(setTheme('New theme prros'))
  };

  return (
    <div>
      <p>Redux</p>
      <button onClick={changeTheme}>Cambiar tema</button>
    </div>
  )
}
