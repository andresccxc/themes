/** @jsx jsx */
/** @jsxRuntime classic */

import axios from 'axios';
import { jsx,Global, css } from '@emotion/react'
import React from 'react';
import { IndexT } from '../themes/thema4';
import { AboutT } from '../themes/thema4/about';
import { AboutTTwo } from '../themes/theme3/about';

class About extends React.Component<any> {
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
        const aboutVariable = theme.pages.about;
        const globalStyles = theme.styles
    
        return (
          <div >
            <Global styles={css`${globalStyles}`}/>
            <AboutTTwo value={aboutVariable}/>
          </div>
          
        )
      }
}
 export default About;