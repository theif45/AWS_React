/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import ModalButton from "../ModalButton/ModalButton";
import * as S from "./style";

const PromptModal = (props) => {
    const modalRef = useRef();
    const [modalContent, setModalContent] = useState("");
    // useEffect는 컴포넌트가 나타날때와 사라질때 사용
    useEffect(() => {
        // 나타날때
        setModalContent(props.todo.todoContent);
        const handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                props.setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            // 사라질때
            document.removeEventListener("mousedown", handler);
        };
    }, [props]); // []는 deps로 안에있는 usestate만 사용가능

    const closeModal = () => {
        props.setIsOpen(false);
    };

    const contentChange = (e) => {
        setModalContent(e.target.value);
    };

    const onSubmitKeyUp = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    const onSubmit = () => {
        props.updateTodo({
            id: props.todo.id,
            todoContent: modalContent,
        });
        closeModal();
    };

    const onRemove = () => {
        props.setTodoList(
            props.todoList.filter((todo) => {
                return todo.id !== props.todo.id;
            })
        );
        closeModal();
    };

    return (
        <div css={S.modalContainer}>
            <div css={S.modalBox} ref={modalRef}>
                <header css={S.modalHeader}>
                    <h1 css={S.modalTitle}>
                        {props.modalState ? props.title : "Delete Todo"}
                    </h1>
                </header>
                <main css={S.modalMain}>
                    {props.modalState ? (
                        <input
                            css={S.modalInput}
                            type="text"
                            defaultValue={props.todo.todoContent}
                            onChange={contentChange}
                            onKeyUp={onSubmitKeyUp}
                        />
                    ) : (
                        <div>삭제하겠습니까?</div>
                    )}
                </main>
                <footer css={S.modalFooter}>
                    <ModalButton
                        buttonCount={2}
                        onClick={props.modalState ? onSubmit : onRemove}
                    >
                        {props.modalState ? "확인" : "삭제"}
                    </ModalButton>
                    <ModalButton buttonCount={2} onClick={closeModal}>
                        취소
                    </ModalButton>
                </footer>
            </div>
        </div>
    );
};

export default PromptModal;
