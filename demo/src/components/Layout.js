// src/components/Layout.js
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import Logo from "~/src/assets/Logo.svg";
import emotionReset from "emotion-reset";
import Menu from "~src/assets/Menu.svg";
import Sidebar from "./Sidebar.js";

const Wrapper = styled.div`
  margin: auto;
  max-width: 900px;
  position: relative;
`;

const Header = styled.div`
  margin: 20px auto;
  text-align: center;
`;

const MenuItem = styled.button`
  position: absolute;
  left: 20px;
  cursor: pointer;
  background: none;
  border: 0;
`;

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

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
            font-size: 1.15rem;
          }

          pre[class*="language-"] {
            margin-bottom: 20px;
          }
        `}
      />
      <Sidebar
        show={showNav}
        triggerClose={() => {
          setShowNav(false);
        }}
      />
      <Wrapper>
        <MenuItem>
          <Menu
            width="20px"
            height="20px"
            onClick={() => {
              setShowNav((prevState) => !prevState);
            }}
          />
        </MenuItem>
        <Header>
          <Logo width="300px" />
        </Header>

        <main>{children}</main>
      </Wrapper>
    </div>
  );
};

export default Layout;
