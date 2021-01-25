import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  text-align: center;
  padding: 1.5rem;

  .logo-box {
    color: ${(props) => props.theme.lightGreen};
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
    }

    &__img {
      font-size: 7.5rem;
      transform: rotate(-20deg);
    }

    &__text {
      font-size: 4.5rem;
      transform: rotate(10deg);
      &:hover {
        transform: skewY(-5deg);
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <div className="logo-box">
        <a href="/">
          <i className="fas fa-hat-wizard logo-box__img"></i>
        </a>
        <a href="/">
          <p className="logo-box__text">Movie Guru</p>
        </a>
      </div>
    </HeaderStyles>
  );
};

export default Header;
