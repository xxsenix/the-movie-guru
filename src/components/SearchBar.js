import React, { useState } from "react";
import styled from "styled-components";

const SearchStyles = styled.div`
  .form {
    padding: 3rem;
    margin-top: -5rem;

    &__input {
      font-size: 1.5rem;
      color: white;
      padding: 1.5rem 2rem;
      border: none;
      width: 70%;
      /* display: block; */
      transition: all 0.3s;
      background: ${(props) => props.theme.lightGray};

      &:focus {
        outline: none;
        box-shadow: 0 1rem 2rem rgba(gray, 0.1);
      }

      &:focus:valid {
        border-bottom: 3px solid ${(props) => props.theme.lightGreen};
      }

      &:focus:invalid {
        border-bottom: 3px solid red;
      }

      &::-webkit-input-placeholder {
        color: ${(props) => props.theme.gray};
      }
    }

    &__label {
      font-size: 2rem;
      font-weight: 700;
      padding: 2rem;
      margin-top: 0.7rem;
      display: block;
      transition: all 0.3s;
      color: white;
    }

    &__search-box {
      display: flex;
    }

    &__button {
      background: ${(props) => props.theme.lightGreen};
      color: ${(props) => props.theme.gray};
      border: 1px solid ${(props) => props.theme.darkGreen};
      height: 5rem;
      padding: 1.5rem;
      cursor: pointer;

      &:focus {
        outline: 0;
      }
    }
  }
`;

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
    setTerm("");
  };

  return (
    <SearchStyles>
      <form onSubmit={onSubmit} className="form">
        <label htmlFor="name" className="form__label">
          Go on, enter your favorite movie. We'll find some similar ones.
        </label>
        <div className="form__search-box">
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="form__input"
            placeholder="Ex. Gladiator"
            name="name"
            id="name"
            required
          />
          <button className="form__button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>
    </SearchStyles>
  );
};

export default SearchBar;
