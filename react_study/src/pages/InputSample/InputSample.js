import React, { useRef, useState } from "react";

const InputSample = () => {
    const userInfo = {
        username: "",
        password: "",
    };

    const [userInput, setUserInput] = useState(userInfo);
    const [userInfoText, setUserInputText] = useState(userInfo);

    const { username, password } = userInfoText;

    const passwordRef = useRef();

    const handlerChange = (e) => {
        const { name, value } = e.target;
        // 기존 값을 뒤의 key-value로 덮음
        setUserInput({ ...userInput, [name]: value });
    };

    const nextFocus = (e) => {
        if (e.keyCode === 13) {
            passwordRef.current.focus();
        }
    };

    const submitHandler = (e) => {
        if (e.keyCode === 13) {
            setUserInputText({ ...userInput });
        }
    };

    return (
        // 태그안의 값들은 큰따옴표하고 나머지는 큰,작은 따옴표 상관없음
        <div>
            <input
                type="text"
                onChange={handlerChange}
                onKeyUp={nextFocus}
                name="username"
            />
            <input
                type="text"
                onChange={handlerChange}
                onKeyUp={submitHandler}
                name="password"
                ref={passwordRef}
            />
            <div>username: {username}</div>
            <div>password: {password}</div>
        </div>
    );
};

export default InputSample;
