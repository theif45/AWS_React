import { css } from "@emotion/react";

export const style = css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    width: 250px;
    height: 100%;
    background-color: #dbdbdb;
    transition: left 1s ease;
`;

export const hidden = css`
    position: absolute;
    top: 0;
    left: -250px;
    z-index: 99;
    width: 250px;
    height: 100%;
    background-color: #dbdbdb;
    transition: left 1s ease;
`;

export const button = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 250px;
    outline: none;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 0;
    width: 15px;
    height: 50px;
    font-size: 15px;
    text-align: center;
    color: red;
    background-color: #444;
    transition: left 1s ease;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 3px 3px red;
    }
`;

export const buttonHidden = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 0px;
    outline: none;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 0;
    width: 15px;
    height: 50px;
    font-size: 15px;
    text-align: center;
    color: red;
    background-color: #444;
    transition: left 1s ease;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 3px 3px red;
    }
`;
