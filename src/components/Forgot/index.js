import React, { useState, useEffect } from "react";
import { Form } from "@rocketseat/unform";
import { InputStyled, ButtonStyled } from "../Global";
import { Container, Main } from "./styles";
import axios from "../axios";

import Mask from "../util/Mask";
import Loading from "../Loading";

export default function Login(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) props.history.push("/");
  }, [props.history]);

  async function handleSubmit(data) {
    setIsSubmitting(true);
    try {
      const response = await axios.post("/auth/login", data);
      localStorage.setItem("token", response.data.token);
      setIsSubmitting(false);
      props.history.push("/");
    } catch (error) {
      const { data } = error.response;
      setIsSubmitting(false);
      setError(data.error);
    }
  }

  function handleBack() {
    props.history.push("/auth/login");
  }

  return (
    <>
      <Container>
        <Main>
          {!isSubmitting ? (
            <>
              <h3>Recuperar Senha</h3>
              <Form onSubmit={handleSubmit}>
                <InputStyled
                  type="email"
                  required
                  name="email"
                  placeholder="E-mail"
                />
                <ButtonStyled color="#EB3732">Recuperar</ButtonStyled>
                <ButtonStyled color="#999" onClick={() => handleBack()}>
                  Cancelar
                </ButtonStyled>
                {error ? error : ""}
              </Form>
            </>
          ) : (
            <Loading />
          )}
        </Main>
      </Container>
    </>
  );
}
