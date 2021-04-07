/** @jsx jsx */
/** @jsxRuntime classic */ 

import { useEffect, useContext } from 'react';
import { AppContext } from '../context/context';
import axios from 'axios';
import { jsx } from '@emotion/react'
import dynamic from "next/dynamic";
import {themeOne} from '../JsonsExamples/ThemeOne';
import {themeTwo} from '../JsonsExamples/themeTwo';
import React from 'react';
import { path } from '../path/path';

class Index extends React.Component<any> {
  state:{
    theme:any,
  }
  static async getInitialProps(ctx) {
    const { data } = await axios('http://localhost:3000/api/themes');
    const theme = data;
    return {theme}
  }
  
  render(){
    
    const { theme } = this.props;
    console.log(path[theme[0].type])
    const pa = '../themes/header-one/HeaderOne';
    const Header = dynamic(()=>import('../themes/header-one/HeaderOne'));
    console.log(Header)
    return (
      
      <div css={theme && theme[0]?.style}>
      {<Header title={this.props.theme && this.props.theme[0]?.content.description}/>}
      <button>Cambiar tema 1</button>
      <button>Cambiar tema 2</button>
    </div>
    )
  }
}

export default Index;