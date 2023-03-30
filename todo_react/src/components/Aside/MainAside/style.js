import { css } from "@emotion/react";

export const style = (isOpen) => css`
    position: absolute;
    top: 0;
    left: ${isOpen ? "0" : "-235px"};
    z-index: 99;
    width: 250px;
    height: 100%;
    background-color: #a47aff;
    transition: left 1s ease;
    & .side-navigation-panel-select {
        background-color: #faf575;
    }
    &
        .side-navigation-panel
        .side-navigation-panel-select
        .side-navigation-panel-select-wrap
        .side-navigation-panel-select-option {
        border: none;
    }
    &
        .side-navigation-panel
        .side-navigation-panel-select
        .side-navigation-panel-select-wrap
        .side-navigation-panel-select-option:hover {
        background-color: #fad775;
    }
    &
        .side-navigation-panel
        .side-navigation-panel-select
        .side-navigation-panel-select-wrap
        .side-navigation-panel-select-option-selected {
        background-color: #533a7a;
        color: white;
    }
    &
        .side-navigation-panel
        .side-navigation-panel-select
        .side-navigation-panel-select-wrap
        .side-navigation-panel-select-option-selected:hover {
        background-color: #d8c1fb;
        color: white;
    }
`;
