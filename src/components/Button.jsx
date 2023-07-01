import { styled } from "styled-components";
import { COLORS } from "../util/utils";

export default function Button({ children, ...rest }) {
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
width: 100%;
  display: block;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
  color: ${COLORS.white};
  background: ${COLORS.darkStateGrey};
  border: none;
  border-radius: 8px;
  padding: 18px;

  /* Hover styles */
  &:hover {
    background: linear-gradient(
      to bottom,
      hsl(14deg 100% 61%),
      hsl(346deg 100% 66%)
    );
    box-shadow: 0 12px 32px hsla(4 100% 67% / 0.5);
  }
  /*   */
  /* Active styles */
  &:active {
  }

  /* Focus styles */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.5);
  }
`;
