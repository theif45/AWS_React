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

export const infoPhoto = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    height: 300px;
    overflow: hidden;
    cursor: pointer;
    & img {
        width: 100%;
    }
    &:hover {
        opacity: 0.8;
    }
    &:hover div {
        display: block;
    }
`;

export const photoFile = css`
    display: none;
`;

export const changeNav = css`
    position: absolute;
    bottom: 3px;
    right: 3px;

    display: none;

    border-radius: 4px;
    padding: 5px;
    background-color: #121212bb;
    color: white;
    font-size: 12px;
`;

export const infoMain = css`
    margin-top: 30px;
    padding: 20px;
`;

export const infoTitle = css`
    margin-bottom: 10px;
    font-size: 20px;
    cursor: default;
`;

export const infoDetail = css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const detailLeft = css`
    width: 48%;
`;

export const detailRight = css`
    width: 48%;
`;

export const infoInputLabel = css`
    font-weight: 600;
    margin-bottom: 5px;
`;
