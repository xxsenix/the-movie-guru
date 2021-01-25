import React from "react";
import styled from "styled-components";

const SpinnerStyles = styled.div`
  display: flex;
  i {
    margin: auto;
    padding: 25rem;
    color: white;
  }
`;

const LoadingPage = () => {
  return (
    <SpinnerStyles className="fa-3x">
      <i className="fas fa-circle-notch fa-spin"></i>
    </SpinnerStyles>
  );
};

export default LoadingPage;
