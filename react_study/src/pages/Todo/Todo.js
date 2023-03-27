/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Icon from "awesome-react-icons/lib/cjs/Icon";
import React, { useRef, useState } from "react";

const TodoContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    width: 100%;
`;

const TodoAddition = css`
    position: sticky;
    top: 0px;
    box-sizing: border-box;
    margin-bottom: 20px;
    border-radius: 7px;
    padding: 10px;
    width: 600px;
    height: 60px;
    background-color: #eee;
`;

const AdditionInput = css`
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 3px solid white;
    padding: 0 50px 0 10px;
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    background-color: #eee;
`;

const TodoAddButton = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
    background-color: #ffffff00;
    cursor: pointer;
    &:hover {
        transition: all ease 1s;
        transform: translateY(-50%) rotate(90deg) scale(1.5);
    }
`;

const TodoList = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    border-radius: 7px;
    padding: 10px;
    width: 600px;
    background-color: #fafafa;
`;

const TodoContent = css`
    width: 85%;
    height: 40px;
`;

const ItemGroup = css`
    display: flex;
    align-items: center;
    height: 40px;
`;

const ItemButton = css`
    display: flex;
    align-items: center;
    border: none;
    height: 100%;
    color: #999;
    background-color: #ffffff00;
    cursor: pointer;
    &:hover {
        color: #121212;
    }
`;

const Todo = () => {
    const [input, setInput] = useState({
        id: 0,
        content: "",
    });

    const [modifying, setModifying] = useState({ id: null, content: "" });

    const [todoList, setTodoList] = useState([]);
    const todoId = useRef(1);

    const onChange = (e) => {
        setInput({
            ...input,
            content: e.target.value,
        });
    };

    const onKeyUp = (e) => {
        if (e.keyCode === 13) {
            onClick();
        }
    };

    const onClick = () => {
        const todo = {
            ...input,
            id: todoId.current++,
        };
        setTodoList([...todoList, todo]);
        setInput({ ...input, content: "" });
    };

    const onRemove = (id) => {
        setTodoList(
            todoList.filter((todo) => {
                return todo.id !== id;
            })
        );
    };

    const onModify= (id, content) => {
        setModifying({ id, content });
      };


    const onSave = (id) => {
    const updatedTodoList = todoList.map((todo) =>
        todo.id === id ? { ...todo, content: modifying.content } : todo
    );
    setTodoList(updatedTodoList);
    setModifying({ id: null, content: "" });
    };

    const onModifyChange = (e) => {
        setModifying({ ...modifying, content: e.target.value });
    };

    return (
        <div css={TodoContainer}>
            <div css={TodoAddition}>
                <input
                    css={AdditionInput}
                    type="text"
                    placeholder="Add your new Todo"
                    onChange={onChange}
                    onKeyUp={onKeyUp}
                    value={input.content}
                />
                <button css={TodoAddButton} onClick={onClick}>
                    <Icon name="plus" />
                </button>
            </div>
            {todoList.map((todo) => {
                const isModifying = modifying.id === todo.id;
                return (
                    <div css={TodoList} key={todo.id}>
            {isModifying ? (
              <input
                css={TodoContent}
                type="text"
                value={modifying.content}
                onChange={onModifyChange}
              />
            ) : (
              <div css={TodoContent}>{todo.content}</div>
            )}
            <div css={ItemGroup}>
              <button
                css={ItemButton}
                onClick={() => (isModifying ? onSave(todo.id) : onModify(todo.id, todo.content))}
              >
                <Icon name={isModifying ? "check" : "edit-pencil-simple"} />
              </button>
              <button css={ItemButton} onClick={() => onRemove(todo.id)}>
                <Icon name="trash" />
              </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Todo;
