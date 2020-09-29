import React from "react";
import styled, { css } from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { typeScale } from "../utils";
import { Illustrations, CloseIcon } from "../assets";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { Email, PasswordInput } from "./textFields";

const getAnimation = showModal => {
  return {
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.slow
  };
};

const ModalWrapper = styled.div`
  width: 800px;
  height: 580px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  border-radius: 2px;
`;

const ColumnModalWrapper = styled(ModalWrapper)`
  flex-direction: row;
  justify-content: space-around;
`;

const ModalHeader = styled.p`
  font-size: ${typeScale.header2};
  margin: 16px 4px 0 4px;

    ${props => props.marginBottom && css`
    margin-bottom: 64px;
  `}
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
  margin-bottom: 36px;
  margin-top: 16px;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  return (
    <animated.div style={useSpring(getAnimation(showModal))}>
      <ModalWrapper>
        <img
          src={Illustrations.SignUp}
          alt="Sign up for an account"
          aria-hidden="true"
        />
        <ModalHeader>Sign Up</ModalHeader>
        <SignUpText>Sign Up to access cool things!</SignUpText>
        <PrimaryButton>Sign Up!</PrimaryButton>
        <CloseModalButton
          aria-label="Close modal"
          onClick={() => setShowModal(false)}
        >
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};

export const SignInModal = ({ showModal, setShowModal }) => {
  return (
    <animated.div style={useSpring(getAnimation(showModal))}>
      <ColumnModalWrapper>
        <div>
          <ModalHeader marginBottom>Sign In</ModalHeader>
          <Email label="Email" placeholder="abc@gmail.com" />
          <PasswordInput label="Password" />
          <SecondaryButton style={{ margin: "16px 16px 0 0" }}>
            Sign Up
          </SecondaryButton>
          <PrimaryButton>Sign In</PrimaryButton>
        </div>
        <img src={Illustrations.SignIn} alt="Sign In" aria-hidden="true" />
        <CloseModalButton
          aria-label="Close modal"
          onClick={() => setShowModal(false)}
        >
          <CloseIcon />
        </CloseModalButton>
      </ColumnModalWrapper>
    </animated.div>
  );
};
