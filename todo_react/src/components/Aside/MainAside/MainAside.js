/** @jsxImportSource @emotion/react */
import * as S from "./style";
import React, { useState } from "react";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Navigation } from "react-minimal-side-navigation/lib";
import { useNavigate } from "react-router-dom";
import Icon from "awesome-react-icons/lib/cjs/Icon";
import { HiHome } from "react-icons/hi";

const MainAside = () => {
    const navigate = useNavigate();
    const [asideFlag, setAsideFlag] = useState(false);

    const onHidden = () => {
        setAsideFlag(false);
    };

    const onAppear = () => {
        setAsideFlag(true);
    };
    return (
        <>
            {asideFlag ? (
                <aside css={S.style}>
                    <Navigation
                        activeItemId="/"
                        onSelect={({ itemId }) => {
                            navigate(itemId);
                        }}
                        items={[
                            {
                                title: "Home",
                                itemId: "/",
                                elemBefore: () => <HiHome />,
                            },
                            {
                                title: "TodoList",
                                itemId: "/todo",
                                elemBefore: () => <Icon name="briefcase" />,
                                subNav: [
                                    {
                                        title: "Todo",
                                        itemId: "/todo",
                                        elemBefore: () => <Icon name="book" />,
                                    },
                                ],
                            },
                        ]}
                    />
                </aside>
            ) : (
                <aside css={S.hidden}>
                    <Navigation
                        activeItemId="/"
                        onSelect={({ itemId }) => {
                            navigate(itemId);
                        }}
                        items={[
                            {
                                title: "Home",
                                itemId: "/",
                                elemBefore: () => <HiHome />,
                            },
                            {
                                title: "TodoList",
                                itemId: "/todo",
                                elemBefore: () => <Icon name="briefcase" />,
                                subNav: [
                                    {
                                        title: "Todo",
                                        itemId: "/todo",
                                        elemBefore: () => <Icon name="book" />,
                                    },
                                ],
                            },
                        ]}
                    />
                </aside>
            )}
            {asideFlag ? (
                <button css={S.button} onClick={onHidden}>
                    ◀
                </button>
            ) : (
                <button css={S.buttonHidden} onClick={onAppear}>
                    ▶
                </button>
            )}
        </>
    );
};

export default MainAside;
