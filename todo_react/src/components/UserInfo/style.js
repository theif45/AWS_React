import { css } from "@emotion/react";

export const infoInputContainer = css`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const infoInput = css`
    margin-bottom: 10px;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    background-color: #f0f0f0;
    &:disabled {
        background-color: #dbdbdb;
    }
`;
