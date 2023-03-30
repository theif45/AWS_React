/** @jsxImportSource @emotion/react */

import React from "react";
import * as S from "./style";

const UserInfo = ({ id, onChange, children, value, isModify }) => {
    return (
        <div css={S.infoInputContainer}>
            <label for={id}>{children}</label>
            <input
                css={S.infoInput}
                type="text"
                id={id}
                onChange={onChange}
                value={value}
                disabled={isModify ? true : false}
            />
        </div>
    );
};

export default UserInfo;
