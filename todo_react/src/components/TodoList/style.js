import { css } from "@emotion/react";

export const contentContainer = css`
    box-sizing: border-box;
    margin: 10px;
    width: 230px;
    height: 230px;
    color: white;
    background-color: #6c40ad;
    font-size: 14px;
    box-shadow: 0 0 5px 1px white;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    &:hover {
        box-shadow: 0 0 10px 1px #faee75;
    }
`;

export const contentHeader = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px;
    padding-bottom: 5px;
    height: 20%;
    font-size: 14px;
`;

export const todoDate = css`
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    height: 100%;
    font-size: 20px;
    line-height: 15px;
    color: white;
`;

export const todoDateTime = css`
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    font-size: 11px;
    color: white;
`;

export const contentMain = css`
    box-sizing: border-box;
    padding: 10px;
    height: 65%;
    word-wrap: break-word;
    word-break: keep-all;
    line-height: 25px;
    font-size: 14px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #e8df58;
    }
`;

export const contentFooter = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    padding: 5px;
    padding-top: 0;
    height: 15%;
    font-size: 14px;
`;

export const contentButton = css`
    box-sizing: border-box;
    border: none;
    padding: 5px;
    color: #e8df58;
    background-color: #6c40ad;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #8658e8;
    }
    &:active {
        background-color: #533a7a;
    }
`;
