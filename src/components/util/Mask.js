import React, { useRef, useEffect, useState } from "react";
import InputMask from "react-input-mask";

import { InputStyled } from "../Global";
import { useField } from "@rocketseat/unform";

export default function Mask({ name, inputMask, placeholder, required }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [mask = "", setMask] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: "props.value",
      clearValue: pickerRef => {
        pickerRef.setInputValue(null);
      }
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  function handleMask(e) {
    const { value } = e.target;
    return setMask(value);
  }

  return (
    <>
      <InputMask
        name={fieldName}
        mask={inputMask}
        value={mask}
        required
        onChange={e => handleMask(e)}
        placeholder={placeholder}
        ref={ref}
      >
        {inputProps => <InputStyled {...inputProps} />}
      </InputMask>
      {error && <span>{error}</span>}
    </>
  );
}
