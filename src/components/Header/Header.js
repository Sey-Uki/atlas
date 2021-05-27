import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const Header = () => {
  const [customShadow, setCustomShadow] = useState(0);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 0) {
        setCustomShadow(2);
      } else {
        setCustomShadow(0);
      }
    };
    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, [setCustomShadow]);
  return (
    <StyledHeader className="mainHeader">
      <Paper elevation={customShadow} className="headerPaper">
        123
      </Paper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;

  & .headerPaper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
  }
`;
