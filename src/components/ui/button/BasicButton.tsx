import styled from "styled-components";

const ButtonContainer = styled.button`
  font-family: monospace;
  background-color: #f3f7fe;
  color: #3b82f6;
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 45px;
  transition: 0.3s;

  &:hover {
    background-color: #3b82f6;
    box-shadow: 0 0 0 5px #3b83f65f;
    color: #fff;
  }
`;

type ButtonType = {
  children: string;
  type: "submit" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function BasicButton({ children, type, onClick }: ButtonType) {
  return (
    <ButtonContainer type={type} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
}
