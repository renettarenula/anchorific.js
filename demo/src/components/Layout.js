// src/components/Layout.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import Logo from "../assets/Logo.svg";
import emotionReset from "emotion-reset";

const Wrapper = styled.div`
  margin: auto;
  max-width: 900px;
`;

const Header = styled.div`
  margin: 20px auto;
  text-align: center;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Global
        styles={css`
          ${emotionReset}
          html {
            box-sizing: border-box;
          }

          body {
            background: #003a6f;
            max-width: 850px;
            margin: auto;
            font-family: "Lato", sans-serif;
          }

          pre[class*="language-"] {
            margin-bottom: 20px;
          }
        `}
      />
      <Wrapper>
        <Header>
          <Logo />
        </Header>
        <main>{children}</main>
      </Wrapper>
    </div>
  );
};

export default Layout;
