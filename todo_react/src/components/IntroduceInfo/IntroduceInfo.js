/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

const introduceInput = css`
    border-bottom: 1px solid #dbdbdd;
    width: 100%;
    height: 100px;
    resize: none;
    background-color: #f0f0f0;
    &:disabled {
        background-color: #dbdbdb;
    }
`;

const IntroduceInfo = ({ id, onChange, value, isModify }) => {
    return (
        <textarea
            css={introduceInput}
            id={id}
            onChange={onChange}
            value={value}
            disabled={isModify ? true : false}
        ></textarea>
    );
};

export default IntroduceInfo;
