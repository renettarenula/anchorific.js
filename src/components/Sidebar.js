import React from "react";
import styled from "@emotion/styled";
import CSSTransition from "react-transition-group/CSSTransition";
import Close from "~src/assets/Close.svg";

const NavWrapper = styled.div`
  &.sidebar {
    & .sidebar-child-enter {
      transform: translateX(-100%);
    }

    & .sidebar-child-enter-active {
      transform: translateX(0%);
      transition: transform 200ms ease-in-out;
    }

    & .sidebar-child-exit {
      transform: translateX(0%);
    }

    & .sidebar-child-exit-active {
      transform: translateX(-100%);
      transition: transform 200ms ease-in-out;
    }
  }
`;

const Nav = styled.div`
  background: #03233f;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  left: 0;
  color: #fff;
  padding: 20px;
`;

const CloseWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 2;
  cursor: pointer;
`;

const Sidebar = (props) => {
  const { show, triggerClose } = props;

  return (
    <NavWrapper className="sidebar">
      <CSSTransition
        unmountOnExit={true}
        in={show}
        timeout={200}
        classNames="sidebar-child"
      >
        <>
          {
            <Nav>
              Hello world!{" "}
              <CloseWrapper>
                <Close width="15px" height="15px" onClick={triggerClose} />
              </CloseWrapper>
            </Nav>
          }
        </>
      </CSSTransition>
    </NavWrapper>
  );
};

export default Sidebar;
