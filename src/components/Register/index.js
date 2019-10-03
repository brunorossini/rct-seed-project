import React, { useState } from "react";
import axios from "../../axios";
import { Form, Input } from "@rocketseat/unform";
import {
  ButtonStyled,
  InputStyled,
  LinkStyled,
  CheckboxStyled,
  TextStyled
} from "../Global";

import Mask from "../util/Mask";
import { Container, Main, Error } from "./styles";

import Loading from "../Loading";

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(data) {
    setIsSubmitting(true);
    try {
      const response = await axios.post("/signup", data);
      console.log(response.data);
      setIsSubmitting(false);
    } catch (error) {
      const { data } = error.response;
      setIsSubmitting(false);
      setError(data.error);
    }
  }

  return (
    <>
      <Container>
        {!isSubmitting ? (
          <Main>
            <h3>Cadastre já o seu estabelecimento</h3>
            <Form onSubmit={handleSubmit}>
              <InputStyled
                type="name"
                required
                name="name"
                placeholder="Nome"
                required
              />
              <InputStyled
                type="email"
                required
                name="email"
                placeholder="E-mail"
                required
              />
              <Mask
                name="phone"
                placeholder="Telefone"
                inputMask="(99) 99999-9999"
                required
              />
              <ButtonStyled color="#EB3732">Cadastrar</ButtonStyled>
              <TextStyled>
                Ao se cadastrar você aceita contato da equipe do MeuRango via
                e-mail, telefone ou whatsapp.
              </TextStyled>
              <Error>{error ? error : ""}</Error>
            </Form>
          </Main>
        ) : (
          <Loading />
        )}
      </Container>
    </>
  );
}
