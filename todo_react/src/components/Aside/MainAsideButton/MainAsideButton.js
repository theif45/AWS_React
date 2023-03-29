/** @jsxImportSource @emotion/react */
import * as S from "./style";
import React from "react";

const MainAsideButton = ({ isOpen, onClick, children }) => {
    return (
        <button css={S.style(isOpen)} onClick={onClick}>
            {children}
        </button>
    );
};

export default MainAsideButton;
