/** @jsx jsx */
/** @jsxRuntime classic */

import { jsx, Global, css } from "@emotion/react";
import React, { useEffect } from "react";
import { IndexTTwo } from "../themes/theme3";
import { IndexT } from "../themes/thema4";
import { loadTheme } from "../redux/themes/actions";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTheme());
  }, [dispatch]);

  const { theme } = useSelector((state: any) => state.theme);

  const renderTheme = (key: string, pageVariable: any) => {
    switch (key) {
      case "theme-one":
        return <IndexT value={pageVariable} />;
      case "theme-two":
        return <IndexTTwo value={pageVariable} />;
      default:
        <></>;
    }
  };

  const indexVariable = theme.pages.index;
  const globalStyles = theme.styles;
  return (
    <div>
      <Global
        styles={css`
          ${globalStyles}
        `}
      />
      {renderTheme(theme.selected_theme, indexVariable)}
    </div>
  );
};

export default Index;
