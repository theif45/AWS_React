import { css } from "@emotion/react";

export const style = (isOpen) => css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: ${isOpen ? "250px" : "0"};
    z-index: 99;
    outline: none;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 0;
    width: 15px;
    height: 50px;
    font-size: 15px;
    text-align: center;
    color: #e8df58;
    background-color: #4f2c9c;
    transition: left 1s ease;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 3px 3px red;
    }
`;
