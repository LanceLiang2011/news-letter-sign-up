import { styled } from "styled-components";
import { COLORS } from "../util/utils";
import { useState } from "react";
import desktopImage from "../images/illustration-sign-up-desktop.svg";
import mobileImage from "../images/illustration-sign-up-mobile.svg";
import iconList from "../images/icon-list.svg";
import Button from "./Button";
import EmailFrom from "./EmailFrom";

export default function Card() {
  const [emailInput, setEmailInput] = useState("");
  const [success, setSuccess] = useState(false);
  return success ? (
    <SuccessWrapper>
      <TickWrapper>
        <img
          src={iconList}
          alt="a red tick, meaning your submission is success."
        />
      </TickWrapper>
      <Title>Thanks for subscribing!</Title>
      <Intro>
        A confirmation email has been sent to <strong>{emailInput}</strong>.
        Please open it and click the button inside to confirm your subscription.
      </Intro>
      <Button
        onClick={() => {
          setEmailInput("");
          setSuccess(false);
        }}
      >
        Dismiss message
      </Button>
    </SuccessWrapper>
  ) : (
    <Wrapper>
      <Content>
        <Title>Stay updated!</Title>
        <Intro>
          Join 60,000+ product managers receiving monthly updates on:
        </Intro>
        <ProductList>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ProductList>
        <EmailFrom
          emailInput={emailInput}
          setEmailInput={setEmailInput}
          setSuccess={setSuccess}
        />
      </Content>
      <Image>
        <source media="(max-width: 930px)" srcSet={mobileImage} />
        <img src={desktopImage} alt="A meaningful description" />
      </Image>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 928px;
  height: 641px;
  background: ${COLORS.white};
  margin: 219px auto;
  box-shadow: 0 15px 60px hsla(0, 0, 0, 0.25);
  border-radius: 36px;
  overflow: hidden;
  color: ${COLORS.darkStateGrey};

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 930px) {
    width: 375px;
    height: auto;
    min-height: 100vh;
    flex-direction: column-reverse;
    margin: auto;
    border-radius: 0;
  }
`;

const Content = styled.div`
  margin: auto 64px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 930px) {
    margin: auto 24px;
  }
`;

const Image = styled.picture`
  margin: 24px;

  @media (max-width: 930px) {
    margin: 0;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 100%;
  font-weight: 700;

  @media (max-width: 930px) {
    font-size: 2.5rem;
  }
`;

const Intro = styled.p`
  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;
`;

const ProductList = styled.ul`
  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;
  margin-bottom: 16px;
  padding: 0;
  list-style: none;
  text-align: left;

  li {
    margin-bottom: 8px;
    @media (max-width: 930px) {
      margin: 0;
    }
  }

  li::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    background-image: url(${iconList});
    background-size: contain;
    background-repeat: no-repeat;
    transform: translateY(15%);
  }
`;

const SuccessWrapper = styled(Wrapper)`
  width: 504px;
  height: 520px;
  background: ${COLORS.white};
  margin: 280px auto;
  border-radius: 36px;
  padding: 64px;

  flex-direction: column;
  align-items: stretch;

  @media (max-width: 930px) {
    width: 375px;
    height: 100vh;
    margin: 0;
    border-radius: 0;
  }
`;

const TickWrapper = styled.div`
  img {
    height: 64px;
    width: 64px;
  }
`;
