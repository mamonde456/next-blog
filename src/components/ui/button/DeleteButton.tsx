import styled from "styled-components";

const Button = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  svg {
    width: 44%;
  }
  &:hover {
    background-color: rgb(237, 56, 56);
    overflow: visible;
  }
  .bin path {
    transition: all 0.2s;
  }
  &:hover .bin path {
    fill: #fff;
  }
  &:active {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3) inset;
    transform: scale(0.98);
  }
  .tooltip {
    --tooltip-color: rgb(41, 41, 41);
    position: absolute;
    top: -40px;
    background-color: var(--tooltip-color);
    color: white;
    border-radius: 5px;
    font-size: 12px;
    padding: 8px 12px;
    font-weight: 600;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.105);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.5s;
  }
  .tooltip::before {
    position: absolute;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    content: "";
    background-color: var(--tooltip-color);
    bottom: -10%;
  }
  &:hover .tooltip {
    opacity: 1;
  }
`;

type ButtonType = { onClick: () => Promise<void> };

export default function DeleteButton({ onClick }: ButtonType) {
  return (
    <Button onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 50 59"
        className="bin"
      >
        <path
          fill="#B5BAC1"
          d="M0 7.5C0 5.01472 2.01472 3 4.5 3H45.5C47.9853 3 50 5.01472 50 7.5V7.5C50 8.32843 49.3284 9 48.5 9H1.5C0.671571 9 0 8.32843 0 7.5V7.5Z"
        ></path>
        <path
          fill="#B5BAC1"
          d="M17 3C17 1.34315 18.3431 0 20 0H29.3125C30.9694 0 32.3125 1.34315 32.3125 3V3H17V3Z"
        ></path>
        <path
          fill="#B5BAC1"
          d="M2.18565 18.0974C2.08466 15.821 3.903 13.9202 6.18172 13.9202H43.8189C46.0976 13.9202 47.916 15.821 47.815 18.0975L46.1699 55.1775C46.0751 57.3155 44.314 59.0002 42.1739 59.0002H7.8268C5.68661 59.0002 3.92559 57.3155 3.83073 55.1775L2.18565 18.0974ZM18.0003 49.5402C16.6196 49.5402 15.5003 48.4209 15.5003 47.0402V24.9602C15.5003 23.5795 16.6196 22.4602 18.0003 22.4602C19.381 22.4602 20.5003 23.5795 20.5003 24.9602V47.0402C20.5003 48.4209 19.381 49.5402 18.0003 49.5402ZM29.5003 47.0402C29.5003 48.4209 30.6196 49.5402 32.0003 49.5402C33.381 49.5402 34.5003 48.4209 34.5003 47.0402V24.9602C34.5003 23.5795 33.381 22.4602 32.0003 22.4602C30.6196 22.4602 29.5003 23.5795 29.5003 24.9602V47.0402Z"
          clip-rule="evenodd"
          fill-rule="evenodd"
        ></path>
        <path fill="#B5BAC1" d="M2 13H48L47.6742 21.28H2.32031L2 13Z"></path>
      </svg>

      <span className="tooltip">Delete</span>
    </Button>
  );
}
