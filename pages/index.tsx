/** @jsx jsx */
/** @jsxRuntime classic */

import axios from "axios";
import { jsx, Global, css } from "@emotion/react";
import React from "react";
import { IndexTTwo } from "../themes/theme3";
import { IndexT } from "../themes/thema4";
import { loadTheme } from "../redux/themes/actions";
import {connect} from "react-redux";

class Index extends React.Component<any> {
  state: {
    theme: any;
  };

  renderTheme(key: string, pageVariable: any) {
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
    const { data } = this.props.theme.theme;
    const indexVariable = data.pages.index;
    const globalStyles = data.styles;
    return (
      <div>
        <Global
          styles={css`
            ${globalStyles}
          `}
        />
        {this.renderTheme(data.selected_theme,indexVariable)}
      </div>
    );
  }
}
const mapStateToProps = (state) => state;
const mapDispatchToProps = {loadTheme};


export default connect(mapStateToProps,mapDispatchToProps) (Index);

