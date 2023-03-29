import { css } from "@emotion/react";

export const todoInputContainer = css`
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-bottom: 3px;
    border-bottom: 1px solid #dbdbdb;
    padding-right: 50px;
    width: 70%;
    height: 40px;
`;

export const noteBook = css`
    box-sizing: border-box;
    font-size: 20px;
    margin: 8px;
`;

export const todoInput = css`
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0 70px;
    width: 100%;
    height: 100%;
    color: #121212;
    font-size: 14px;
    transition: padding 0.5s ease;
    &:focus {
        padding: 0 10px;
    }
`;

export const addTodoButton = css`
    box-sizing: border-box;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 0;

    border: none;
    padding: 5px 20px;
    height: 100%;
    color: #121212;
    background-color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #f0f0f0;
    }
`;
