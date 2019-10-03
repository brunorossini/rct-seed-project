import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lottie/loading.json";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  grid-area: main;
  align-self: center;
`;

export default function LottieLoading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };

  return (
    <Div>
      <Lottie options={defaultOptions} height={120} width={120} />
    </Div>
  );
}
