/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import Icon from "awesome-react-icons/lib/cjs/Icon";

export const modifyButton = css`
    border: none;
    padding: 5px;
    background-color: #8658e8;
    color: #e8df58;
    cursor: pointer;
    &:hover {
        background-color: #d8c1fb;
    }
    &:active {
        background-color: #533a7a;
    }
`;

const InformationButton = ({ isModify, onModify, onCheck }) => {
    return (
        <>
            <button css={modifyButton} onClick={isModify ? onCheck : onModify}>
                {isModify ? (
                    <Icon name="check" />
                ) : (
                    <Icon name="edit-pencil-simple" />
                )}
            </button>
        </>
    );
};

export default InformationButton;
