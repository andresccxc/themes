/** @jsx jsx */
/** @jsxRuntime classic */

import { jsx, Global, css } from "@emotion/react";
import React from "react";
import { useSelector } from "react-redux";
import { AboutTTwo } from "../themes/theme3/about";
import { AboutT } from "../themes/thema4/about";

const About = () => {
  const { theme } = useSelector((state: any) => state.theme);

  const renderTheme = (key: string, pageVariable: any) => {
    switch (key) {
      case "theme-one":
        return <AboutT value={pageVariable} />;
      case "theme-two":
        return <AboutTTwo value={pageVariable} />;
      default:
        <></>;
    }
  };

  const aboutVariable = theme.pages.about;
  const globalStyles = theme.styles;
  return (
    <div>
      <Global
        styles={css`
          ${globalStyles}
        `}
      />
      {renderTheme(theme.selected_theme, aboutVariable)}
    </div>
  );
};

export default About;
