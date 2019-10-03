import styled from "styled-components";

export const ButtonStyled = styled.button`
  margin-top: 10px;
  position: relative;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  height: 40px;
  width: 100%;
  opacity: 1;
  background-color: ${props => props.color};
  color: #fff;
  font-size: 14px;
  font-weight: 700;
`;

export const InputStyled = styled.input`
  flex: 0 1 100%;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #999;
  font-size: 14px;
  font-weight: 300;
  padding-left: 10px;
  text-align: left;
  background: #fafafa;
  margin-bottom: 10px;
  display: block;
  height: 40px;
  background-color: #fff;
`;

export const LinkStyled = styled.a`
  color: #666;
  font-size: 14px;
  width: 50%;
  text-align: right;
  cursor: pointer;
  margin: 5px 0px 5px 0px;
`;

export const CheckboxStyled = styled.div`
  width: 50%;
  color: #666;
  font-size: 14px;
  margin: 5px 0px 5px 0px;
`;

export const TextStyled = styled.p`
  color: #666;
  font-size: small;
  ext-align: justify;
`;

export const Divider = styled.hr`
  width: 100%;
  border-top: 1px dashed #aaa;
  letter-spacing: 3px
  margin-top: 20px;
`;

export const LinkSignup = styled.a`
  color: #666;
  cursor: pointer;
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: block;
  text-align: center;

  :hover {
    text-decoration: underline;
  }
`;
