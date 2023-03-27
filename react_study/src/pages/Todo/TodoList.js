/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";

const Todo = () => {
    useEffect(() => {
        console.log("컴포넌트 렌더링");
    }, []);

    const todo = {
        id: 0,
        value: "",
    };

    const todoIndex = useRef(1);
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState(todo);
    const inputRef = useRef();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const addHandler = () => {
        const todo = {
            ...input,
        };

        todo.id = todoIndex.current++;

        setTodos([...todos, todo]);
    };

    const onRemove = (index) => {
        setTodos(todos.filter((todo) => todo.id !== index));
    };

    return (
        <div css={S.Container}>
            <div css={S.InputSection}>
                <input
                    css={S.Input}
                    type="text"
                    name="value"
                    onChange={inputHandler}
                    ref={inputRef}
                />
                <button onClick={addHandler}>➕</button>
            </div>
            <div>
                <table css={S.Table}>
                    <thead>
                        <tr>
                            <th css={S.Th}>TodoList</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => {
                            return (
                                <tr>
                                    <td css={S.Td}>
                                        <span css={S.span}>{todo.value}</span>
                                        <button
                                            onClick={() => onRemove(todo.id)}
                                        >
                                            ❌
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Todo;
