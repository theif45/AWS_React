/** @jsxImportSource @emotion/react */
import * as S from "./style";
import React, { useState } from "react";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Navigation } from "react-minimal-side-navigation/lib";
import { useNavigate } from "react-router-dom";
import Icon from "awesome-react-icons/lib/cjs/Icon";
import { HiHome } from "react-icons/hi";
import MainAsideButton from "../MainAsideButton/MainAsideButton";

const MainAside = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const onHidden = () => {
        setIsOpen(false);
    };

    const onAppear = () => {
        setIsOpen(true);
    };
    return (
        <>
            <aside css={S.style(isOpen)}>
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
                            title: "Todo",
                            itemId: "/todo",
                            elemBefore: () => <Icon name="briefcase" />,
                        },
                    ]}
                />
            </aside>
            <MainAsideButton
                isOpen={isOpen}
                onClick={isOpen ? onHidden : onAppear}
            >
                {isOpen ? "◀" : "▶"}
            </MainAsideButton>
        </>
    );
};

export default MainAside;
