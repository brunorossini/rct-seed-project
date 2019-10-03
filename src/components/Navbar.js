import styled from "styled-components";

export default styled.div`
  grid-area: header;

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100vw;
    background-color: #ed393d;
    transition: height 0.5s;
  }

  @media (min-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 60px;
    background-color: #ed393d;
    transition: height 0.5s;
  }

  @media (min-width: 1070px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 72px;
    background-color: #ed393d;
    transition: height 0.5s;
  }
`;
