import { css } from "@emotion/react";

export const TodoAddition = css`
    position: sticky;
    top: 0px;
    box-sizing: border-box;
    margin-bottom: 20px;
    border-radius: 7px;
    padding: 10px;
    width: 600px;
    height: 60px;
    background-color: #eee;
`;

export const AdditionInput = css`
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 3px solid white;
    padding: 0 50px 0 10px;
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    background-color: #eee;
`;

export const TodoAddButton = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
    background-color: #ffffff00;
    cursor: pointer;
    &:hover {
        transition: all ease 1s;
        transform: translateY(-50%) rotate(90deg) scale(1.5);
    }
`;
