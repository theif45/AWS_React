/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

const style = css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e8df58;
    background-color: #8658e8;
    width: 100%;
    height: 100%;
    font-size: 100px;
    font-weight: 600;
`;

const Home = () => {
    return (
        <motion.div
            initial={{ y: 800 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0 }}
            css={style}
        >
            Todo List
        </motion.div>
    );
};

export default Home;
