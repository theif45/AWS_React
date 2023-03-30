/** @jsxImportSource @emotion/react */
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AddTodo from "../../components/AddTodo/AddTodo";
import PromptModal from "../../components/Modal/PromptModal/PromptModal";
import TodoList from "../../components/TodoList/TodoList";
import * as S from "./style";

const Todo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalState, setModalState] = useState(false);
    const [index, setIndex] = useState(0);
    const [modifyTodo, setModifyTodo] = useState({
        id: 0,
        date: "",
        dateTime: "",
        todoContent: "",
    });

    const todoObj = {
        id: 0,
        date: "",
        dateTime: "",
        todoContent: "",
    };
    const [input, setInput] = useState(todoObj);
    const [todoList, setTodoList] = useState(
        JSON.parse(
            localStorage.getItem("todoList") === null
                ? "[]"
                : localStorage.getItem("todoList")
        )
    );

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
        if (todoList.length > 0) {
            const lastIndex = todoList.length - 1;
            if (todoList[lastIndex].id !== undefined) {
                setIndex(todoList[lastIndex].id);
            }
        }
    }, [todoList]);

    const onChange = (e) => {
        const nowDate = new Date();
        const convertDay = (day) => {
            return day === 0
                ? "일"
                : day === 1
                ? "월"
                : day === 2
                ? "화"
                : day === 3
                ? "수"
                : day === 4
                ? "목"
                : day === 5
                ? "금"
                : "토";
        };

        const date = `${nowDate.getFullYear()}.${
            nowDate.getMonth() + 1
        }.${nowDate.getDate()}(${convertDay(nowDate.getDay())})`;
        const dateTime = `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`;
        setInput({
            ...input,
            date: date,
            dateTime: dateTime,
            todoContent: e.target.value,
        });
    };

    const addTodo = () => {
        const todo = {
            ...input,
            id: index + 1,
        };
        setTodoList([...todoList, todo]);
        setInput({ ...input, todoContent: "" });
    };

    const onKeyUp = (e) => {
        if (e.keyCode === 13) {
            addTodo();
        }
    };

    const deleteModal = (id) => {
        setModifyTodo(todoList.filter((todo) => todo.id === id)[0]);
        setIsOpen(true);
        setModalState(false);
    };

    const updateTodo = (modifyTodo) => {
        setTodoList(
            todoList.map((todo) => {
                if (todo.id === modifyTodo.id) {
                    todo.todoContent = modifyTodo.todoContent;
                }
                return todo;
            })
        );
    };

    const openModal = (id) => {
        setModifyTodo(todoList.filter((todo) => todo.id === id)[0]);
        setIsOpen(true);
        setModalState(true);
    };

    return (
        <>
            <motion.div
                initial={{ y: 800 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0 }}
                style={{ height: "100%" }}
            >
                <div css={S.mainContainer}>
                    <header css={S.mainHeader}>
                        <h1 css={S.mainTitle}>TODO</h1>
                        <AddTodo
                            onChange={onChange}
                            onClick={addTodo}
                            onKeyUp={onKeyUp}
                            value={input.todoContent}
                        />
                    </header>
                    <ul css={S.todoContentList}>
                        {todoList.map((todo) => {
                            return (
                                <TodoList
                                    todo={todo}
                                    openModal={openModal}
                                    deleteModal={deleteModal}
                                />
                            );
                        })}
                    </ul>
                </div>
                {isOpen ? (
                    <PromptModal
                        title={"Edit Todo"}
                        todo={modifyTodo}
                        todoList={todoList}
                        setTodoList={setTodoList}
                        modalState={modalState}
                        setIsOpen={setIsOpen}
                        updateTodo={updateTodo}
                    />
                ) : (
                    ""
                )}
            </motion.div>
        </>
    );
};

export default Todo;
