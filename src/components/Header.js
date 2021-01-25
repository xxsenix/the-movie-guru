import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  text-align: center;
  padding: 1.5rem;

  .logo-box {
    text-decoration: none;
    color: ${(props) => props.theme.lightGreen};

    &__img {
      font-size: 7.5rem;
    }

    &__text {
      font-size: 3.5rem;
      &:hover {
        transform: skewY(-5deg);
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <a href="/" className="logo-box">
        <i className="fas fa-hat-wizard logo-box__img"></i>
        <p className="logo-box__text">Movie Guru</p>
      </a>
    </HeaderStyles>
  );
};

export default Header;
