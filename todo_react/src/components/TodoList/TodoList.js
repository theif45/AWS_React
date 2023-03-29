/** @jsxImportSource @emotion/react */
import Icon from "awesome-react-icons/lib/cjs/Icon";
import React from "react";
import * as S from "./style";

const TodoList = ({ todo, openModal, deleteModal }) => {
    return (
        <li css={S.contentContainer} key={todo.id}>
            <div css={S.contentHeader}>
                <div css={S.todoDate}>{todo.date}</div>
                <div css={S.todoDateTime}>{todo.dateTime}</div>
            </div>
            <div css={S.contentMain}>{todo.todoContent}</div>
            <div css={S.contentFooter}>
                <button
                    css={S.contentButton}
                    onClick={() => openModal(todo.id)}
                >
                    <Icon name="edit-pencil-simple" />
                </button>
                <button
                    css={S.contentButton}
                    onClick={() => deleteModal(todo.id)}
                >
                    <Icon name="trash" />
                </button>
            </div>
        </li>
    );
};

export default TodoList;
