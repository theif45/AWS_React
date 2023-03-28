/** @jsxImportSource @emotion/react */
import * as S from "./style";
import Icon from "awesome-react-icons/lib/cjs/Icon";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Navigation } from "react-minimal-side-navigation/lib";
import { useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { GrTest } from "react-icons/gr";
import { BsCardChecklist } from "react-icons/bs";
import { BiListCheck } from "react-icons/bi";
import React from "react";

const MainAside = () => {
    const navigate = useNavigate();
    return (
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
                        title: "T1",
                        itemId: "/t1",
                        elemBefore: () => <Icon name="cloud-lightning" />,
                    },
                    {
                        title: "T2",
                        itemId: "/t2",
                        elemBefore: () => <GrTest />,
                    },
                    {
                        title: "Sample",
                        itemId: "/sample",
                        elemBefore: () => <BsCardChecklist />,
                        subNav: [
                            {
                                title: "input1",
                                itemId: "/sample/input/1",
                                elemBefore: () => <BiListCheck />,
                            },
                        ],
                    },
                    {
                        title: "List",
                        itemId: "/users",
                        elemBefore: () => <Icon name="users" />,
                        subNav: [
                            {
                                title: "사용자 전체 조회",
                                itemId: "/users",
                                elemBefore: () => <Icon name="user" />,
                            },
                        ],
                    },
                    {
                        title: "TodoList",
                        itemId: "/todo",
                        elemBefore: () => <Icon name="book" />,
                    },
                    {
                        title: "NumberCounter",
                        itemId: "/number/counter",
                        elemBefore: () => <Icon name="inbox" />,
                    },
                ]}
            />
        </aside>
    );
};

export default MainAside;
