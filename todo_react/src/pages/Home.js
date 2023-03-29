/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const style = css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #8658e8;
    width: 100%;
    height: 100%;
    font-size: 100px;
    font-weight: 600;
`;

const Home = () => {
    return <div css={style}>Todo List</div>;
};

export default Home;
