import React, { useState } from "react";
import styled from "styled-components";

const SearchStyles = styled.div`
  .form {
    padding: 3rem;
    margin-top: -5rem;

    &__input {
      font-size: 1.5rem;
      padding: 1.5rem 2rem;
      border-radius: 2px;
      border: none;
      width: 90%;
      display: block;
      transition: all 0.3s;
      background: ${(props) => props.theme.lightGray};

      &:focus {
        outline: none;
        box-shadow: 0 1rem 2rem rgba(${(props) => props.theme.gray}, 0.1);
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
  }
`;

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <SearchStyles>
      <form onSubmit={onSubmit} className="form">
        <label htmlFor="name" className="form__label">
          Go on, enter your favorite movie. We'll find some similar ones.
        </label>
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
      </form>
    </SearchStyles>
  );
};

export default SearchBar;
