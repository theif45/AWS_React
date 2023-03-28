/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./style";
import TodoListButton from "./TodoListButton/TodoListButton";
import Icon from "awesome-react-icons/lib/cjs/Icon";

const TodoList = ({ todo, openModal, onRemove }) => {
    return (
        <div css={S.TodoList} key={todo.id}>
            <div css={S.TodoContent}>{todo.content}</div>
            <div css={S.ItemGroup}>
                <TodoListButton onClick={() => openModal(todo.id)}>
                    <Icon name={"edit-pencil-simple"} />
                </TodoListButton>
                <TodoListButton onClick={() => onRemove(todo.id)}>
                    <Icon name="trash" />
                </TodoListButton>
            </div>
        </div>
    );
};

export default TodoList;
