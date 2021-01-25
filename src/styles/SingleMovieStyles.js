import styled from "styled-components";

const SingleMovieStyles = styled.div`
  .card {
    padding: 2rem;
    perspective: 150rem;
    -moz-perspective: 150rem;
    width: 30rem;
    height: 45rem;
  }

  img {
    width: 100%;
    height: 100%;
    /* object-fit: contain; */
    display: grid;
    align-items: center;
    border-radius: 5px;
  }

  .card__inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .card:hover .card__inner {
    transform: rotateY(180deg);
  }

  .card__side--front,
  .card__side--back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .card__side--back {
    background-image: linear-gradient(to right, #7ed56f, #00c749);
    color: white;
    transform: rotateY(180deg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
  }

  .card__title {
    padding: 1rem;
  }

  .card__description {
    font-size: 1.5rem;
    margin: auto;
    padding: 1rem;
  }

  .card__rating {
    justify-content: end;
  }

  .overflow {
    overflow: hidden;
    margin: auto;
    padding: 1rem;
    font-size: 1.4rem;
  }
`;

export default SingleMovieStyles;
