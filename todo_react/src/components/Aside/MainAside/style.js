import { css } from "@emotion/react";

export const style = (isOpen) => css`
    position: absolute;
    top: 0;
    left: ${isOpen ? "0" : "-250px"};
    z-index: 99;
    width: 250px;
    height: 100%;
    background-color: #a47aff;
    transition: left 1s ease;
    & nav ul li {
        background-color: #9c931c;
    }
    & nav ul li:focus {
        background-color: #9c931c;
    }
`;
