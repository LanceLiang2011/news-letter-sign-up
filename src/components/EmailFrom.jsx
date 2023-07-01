import { styled } from "styled-components";
import { COLORS, isValidEmail } from "../util/utils";
import { useState } from "react";
import Button from "./Button";

export default function EmailFrom({ setSuccess, emailInput, setEmailInput }) {
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(emailInput)) {
      setError(true);
      return;
    }
    setEmailInput("");
    setSuccess(true);
  };

  return (
    <Wrapper noValidate onSubmit={onSubmit}>
      <EmailInput error={error}>
        <LabelGroup>
          <label htmlFor="email">Email adress:</label>
          {error && <span>Valid email required</span>}
        </LabelGroup>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="email@company.com"
          value={emailInput}
          onChange={(e) => {
            setEmailInput(e.target.value);
          }}
          onFocus={() => {
            setError(false);
          }}
        />
      </EmailInput>
      <Button>Subscribe to monthly newsletter</Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`;
const EmailInput = styled.div`
  margin-bottom: 24px;
  label {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 8px;
  }
  span {
    color: ${COLORS.tomato};
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    color: ${(p) => (p.error ? COLORS.tomato : COLORS.darkStateGrey)};
    background-color: ${(p) =>
      p.error ? `hsla(4 100% 67% / 0.15)` : COLORS.white};
    font-size: 1rem;
    line-height: 150%;
    padding: 16px 24px;
    border: 1px solid
      ${(p) => (p.error ? COLORS.tomato : `hsla(243 28% 13% / 0.25)`)};
    /* border: 1px solid hsla(243 28% 13% / 0.25); */
    border-radius: 8px;

    &::placeholder {
      color: ${(p) => (p.error ? COLORS.tomato : COLORS.charcoalGrey)};
    }
  }
`;

const LabelGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
