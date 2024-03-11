import { FormEvent } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 90px;
  height: 40px;
  position: relative;
  font-family: var(--font);
  color: #3b82f6;
  font-weight: 600;
  background-color: #fff;
  border: none;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  transition: all ease 100ms;

  &:hover {
    background-color: #cbdcf8;
  }

  &:focus {
    background-color: #cbdcf8;
  }

  &::before {
    content: "done✅";
    position: absolute;
    color: #3b82f6;
    left: 0;
    top: -14px;
    right: 0;
    transition: all ease 300ms;
    opacity: 0%;
  }

  &:focus::before {
    opacity: 100%;
    transform: translatey(26px);
  }

  .submit {
    transition: all ease 100ms;
    opacity: 100%;
  }
  &:focus > .submit {
    opacity: 0%;
  }
`;

type ButtonType = { onClick: (e: React.MouseEvent<HTMLButtonElement>) => void };

export default function SubmitButton({ onClick }: ButtonType) {
  return (
    <Button className="button" type="submit" onClick={onClick}>
      <p className="submit">submit</p>
    </Button>
  );
}
