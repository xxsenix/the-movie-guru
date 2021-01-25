import React from "react";
import styled from "styled-components";

const ErrorPageStyles = styled.div`
  display: flex;
  h1 {
    margin: auto;
    padding: 5rem;
    color: white;
  }
`;

const ErrorPage = () => {
  return (
    <ErrorPageStyles>
      <h1>Hmm, we don't know that one. Try another search.</h1>
    </ErrorPageStyles>
  );
};

export default ErrorPage;
