import { css } from "@emotion/react";

export const mainContainer = css`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    width: 550px;
    height: 100%;
    color: #e8df58;
`;

export const mainHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const mainTitle = css`
    margin: 20px 0 0 20px;
    font-size: 36px;
    font-weight: 600;
`;

export const todoContentList = css`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    padding: 20px;
    width: 100%;
    height: 88%;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #e8df58;
    }
`;
