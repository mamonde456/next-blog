import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  form {
    /* width: fit-content; */
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #2d2d2d; */
    background-color: #f1f1f1;
    padding: 0 15px;
    border-radius: 10px;
    border: 1px solid rgb(156, 156, 156);
    /* border: 1px solid rgb(63, 63, 63); */
  }

  &:focus-within {
    border: 1px solid rgb(110, 110, 110);
  }
  .fileUploadWrapper {
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  #file {
    display: none;
  }
  .fileUploadWrapper label {
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .fileUploadWrapper label svg {
    height: 18px;
  }
  .fileUploadWrapper label svg path {
    transition: all 0.3s;
  }
  .fileUploadWrapper label svg circle {
    transition: all 0.3s;
  }
  .fileUploadWrapper label:hover svg path {
    stroke: #fff;
  }
  .fileUploadWrapper label:hover svg circle {
    stroke: #fff;
    fill: #3c3c3c;
  }
  .fileUploadWrapper label:hover .tooltip {
    display: block;
    opacity: 1;
  }
  .tooltip {
    position: absolute;
    top: -40px;
    display: none;
    opacity: 0;
    color: black;
    /* color: white; */
    font-size: 10px;
    text-wrap: nowrap;
    background-color: #000;
    padding: 6px 10px;
    border: 1px solid #3c3c3c;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.596);
    transition: all 0.3s;
  }
  #messageInput {
    width: 100%;
    /* width: 200px; */
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    padding-left: 10px;
    color: black;
    /* color: white; */
  }
  #messageInput:focus ~ #sendButton svg path,
  #messageInput:valid ~ #sendButton svg path {
    /* fill: #3c3c3c;
    stroke: white; */
    fill: white;
    stroke: #3c3c3c;
  }

  #sendButton {
    width: fit-content;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
  }
  #sendButton svg {
    height: 18px;
    transition: all 0.3s;
  }
  #sendButton svg path {
    transition: all 0.3s;
  }
  #sendButton:hover svg path {
    /* fill: #3c3c3c;
    stroke: white; */
    fill: white;
    stroke: #3c3c3c;
  }
`;

export default function MessageInput({
  handleChildData,
}: {
  handleChildData: (data: string) => void;
}) {
  const messageRef = useRef<HTMLInputElement>(null);

  const sendDataToParent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      currentTarget: {
        message: { value },
      },
    } = e;
    handleChildData(value);
    if (messageRef && messageRef.current) {
      messageRef.current.value = "";
    }
  };

  return (
    <Wrapper>
      {/* <div className="fileUploadWrapper">
        <label htmlFor="file">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 337 337"
          >
            <circle
              strokeWidth="20"
              stroke="#6c6c6c"
              fill="none"
              r="158.5"
              cy="168.5"
              cx="168.5"
            ></circle>
            <path
              stroke-linecap="round"
              strokeWidth="25"
              stroke="#6c6c6c"
              d="M167.759 79V259"
            ></path>
            <path
              stroke-linecap="round"
              strokeWidth="25"
              stroke="#6c6c6c"
              d="M79 167.138H259"
            ></path>
          </svg>
          <span className="tooltip">Add an image</span>
        </label>
        <input type="file" id="file" name="file" />
      </div> */}
      <form onSubmit={sendDataToParent}>
        <input
          ref={messageRef}
          required
          placeholder="Message..."
          type="text"
          id="messageInput"
          name="message"
        />
        <button id="sendButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 664 663"
          >
            <path
              fill="none"
              d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
            ></path>
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="33.67"
              stroke="#6c6c6c"
              d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
            ></path>
          </svg>
        </button>
      </form>
    </Wrapper>
  );
}
