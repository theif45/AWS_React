import { css } from "@emotion/react";

export const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 50px auto;
    width: 900px;
`;

export const InputSection = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Input = css`
    margin: 0;
    padding: 0;
    width: 161.69px;
    height: 19px;
`;

export const Table = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    width: 210px;
    height: 400px;

    background-color: skyblue;

    overflow: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }
`;

export const Th = css`
    padding: 20px;
    font-size: 30px;
`;

export const Td = css`
    display: flex;
    justify-content: space-between;
    border: 1px solid #dbdbdb;
    width: 200px;
    height: 40px;
`;

export const span = css`
    display: flex;
    align-items: center;
`;
