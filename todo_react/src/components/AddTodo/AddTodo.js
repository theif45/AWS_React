/** @jsxImportSource @emotion/react */
import React from "react";
import { SlNotebook } from "react-icons/sl";
import Icon from "awesome-react-icons/lib/cjs/Icon";
import * as S from "./style";

const AddTodo = ({ onChange, onClick, onKeyUp, value }) => {
    return (
        <div css={S.todoInputContainer}>
            <SlNotebook css={S.noteBook} />
            <input
                css={S.todoInput}
                type="text"
                placeholder="Please enter todo..."
                onChange={onChange}
                value={value}
                onKeyUp={onKeyUp}
            />
            <button css={S.addTodoButton} onClick={onClick}>
                <Icon name="plus" />
            </button>
        </div>
    );
};

export default AddTodo;
