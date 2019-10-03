import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px auto 80px;
  grid-template-areas:
    "header"
    "main"
    "footer";
  height: 100vh;
`;

export const Main = styled.div`
  display: grid;
  grid-area: main;
  justify-content: center;
  align-content: center;

  form {
    width: 330px;
    display: flex;
    flex-flow: row wrap;
  }

  h3 {
    margin-bottom: 15px;
  }
`;

export const Error = styled.span`
  margin-top: 15px;
  color: #d33d39;
`;
