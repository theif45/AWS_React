/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { configureStore } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    border: 3px solid green;
    width: 400px;
    height: 400px;
`;

const BoxContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border: 3px solid green;
    width: 80%;
    height: 80%;
`;

const increaseFunction = (state) => {
    state.number++;
    return state;
};

// 첫번째는 상태, 뒤는 메소드명
// 4단계이상 깊이의 components를 가지면 사용하는 것이 좋음
const reducer = (currentState, action) => {
    if (currentState === undefined) {
        return {
            number: 0,
        };
    }
    let newState = { ...currentState };
    // type을 사용하여 조건 가능
    switch (action.type) {
        case "increase":
            newState = increaseFunction(newState);
            break;
        case "decrease":
            newState.number--;
            break;
        default:
            break;
    }

    // if (action.type === "increase") {
    //     newState.number++;
    // } else if (action.type === "decrease") {
    //     newState.number--;
    // }
    return newState;
};

const store = configureStore({ reducer });

const Box = ({ title, children }) => {
    // store에서 꺼내는 역할
    const count = useSelector((store) => store.number);
    return (
        <div css={BoxContainer}>
            <h1>{title}</h1>
            <h2>count: {count}</h2>
            {children}
        </div>
    );
};

const NumberCounter = () => {
    // const [count, setCount] = useState(0);

    // const increaseCount = () => {
    //     setCount(count + 1);
    // };

    // const decreaseCount = () => {
    //     setCount(count - 1);
    // };

    const Buttons = () => {
        const dispatch = useDispatch();

        const increaseCount = () => {
            dispatch({ type: "increase" });
        };

        const decreaseCount = () => {
            dispatch({ type: "decrease" });
        };

        return (
            <>
                <button onClick={increaseCount}>+</button>
                <button onClick={decreaseCount}>-</button>
            </>
        );
    };
    return (
        <div css={Container}>
            {/* store는 provider안에서 공유됨 */}
            <Provider store={store}>
                <Box title={"box1"}>
                    <Box title={"box2"}>
                        <Box title={"box3"}>
                            <Box title={"box3"}>
                                <Buttons />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Provider>
        </div>
    );
};

export default NumberCounter;
