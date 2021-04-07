/** @jsx jsx */
/** @jsxRuntime classic */

import { useEffect } from 'react';
import axios from 'axios';
import { setTheme } from '../redux/themes/actions';
import { jsx } from '@emotion/react'
import dynamic from "next/dynamic";
import React from 'react';
import { path } from '../path/path';

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
    console.log(theme)
    return (
      <div>Fuck my life</div>
    )
  }
}

export default Index;