/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const ModalButton = ({ onClick, children, buttonCount }) => {
    const modalButton = css`
        border: none;
        background-color: #ffffff;
        width: ${100 / buttonCount + "%"};
        height: 100%;
        font-weight: 600;
        cursor: pointer;
        &:not(:last-of-type) {
            border-right: 1px solid #dbdbdb;
        }
        &:hover {
            background-color: #eee;
        }
        &:active {
            background-color: #dbdbdb;
        }
    `;

    return (
        <button css={modalButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default ModalButton;
