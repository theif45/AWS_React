import { css } from "@emotion/react";

export const style = (isOpen) => css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: ${isOpen ? "235px" : "0"};
    z-index: 99;
    outline: none;
    border: none;
    padding: 0;
    width: 15px;
    height: 100%;
    font-size: 15px;
    text-align: center;
    color: #e8df58;
    background-color: ${isOpen ? "#a47aff" : "#4f2c9c"};
    transition: left 1s ease, color 1s ease;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 3px 3px #faee75;
    }
`;
