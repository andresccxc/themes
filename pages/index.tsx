/** @jsx jsx */
/** @jsxRuntime classic */

import { useEffect } from 'react';
import axios from 'axios';
import { setTheme } from '../redux/themes/actions';
import { jsx,Global, css } from '@emotion/react'
import dynamic from "next/dynamic";
import React from 'react';
import { path } from '../path/path';
import { IndexT } from '../themes/thema4';

class Index extends React.Component<any> {
  state:{
    theme:any,
    Header: React.ComponentType<any>
  }
  static async getInitialProps(ctx) {
    const { data } = await axios('http://localhost:3000/api/themes');
    const theme = data;
    return {theme}
  }
  
  render(){
    
    const { theme } = this.props;
    const indexVariable = theme.pages.index;
    const globalStyles = theme.styles

    return (
      <div >
        <Global styles={css`${globalStyles}`}/>
        <IndexT value={indexVariable}/>
      </div>
      
    )
  }
}

export default Index;