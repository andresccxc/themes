import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Head from 'next/head';
import { setThemes } from '../redux/themes/actions';
import Theme1 from '../themes/Theme1';
import Theme2 from '../themes/Theme2';
import ChangeTheme from '../components/change-theme/ChangeTheme';

const Home = () => {
  const dispatch = useDispatch();
  const { themes: { theme1, theme2 }, currentTheme } = useSelector((state: any) => state.theme);

  useEffect(() => {
    getTheme();
  }, []);

  const getTheme = async () => {
    const { data } = await axios('http://localhost:3000/api/themes');
    dispatch(setThemes(data));
  };

  const template = {
    'theme1': <Theme1 data={theme1} />,
    'theme2': <Theme2 data={theme2} />
  };
  console.log('tema actual',currentTheme);
  return (
    <div className='relative'>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          crossorigin="anonymous"
        />
      </Head>
      {template[currentTheme]} 
      <ChangeTheme />
    </div>
  );
}

export default Home;