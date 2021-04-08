/** @jsx jsx */
/** @jsxRuntime classic */

import axios from "axios";
import { jsx, Global, css } from "@emotion/react";
import React from "react";
import { IndexTTwo } from "../themes/theme3";
import { IndexT } from "../themes/thema4";
import dynamic from "next/dynamic";

class Index extends React.Component<any> {
  state: {
    theme: any;
  };
  static async getInitialProps(ctx) {
    const { data } = await axios("http://localhost:3000/api/themes");
    const theme = data;
    return { theme };
  }
  renderTheme(key: string, pageVariable: any) {
    console.log(key)
    switch (key) {
      case "theme-one":
        return <IndexT value={pageVariable} />;
      case "theme-two":
        return <IndexTTwo value={pageVariable} />;
      default:
        <></>;
    }
  }
  render() {
    const { theme } = this.props;
    const indexVariable = theme.pages.index;
    const globalStyles = theme.styles;

    return (
      <div>
        <Global
          styles={css`
            ${globalStyles}
          `}
        />
        {this.renderTheme(theme.selected_theme,indexVariable)}
      </div>
    );
  }
}

export default Index;
