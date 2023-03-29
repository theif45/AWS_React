import { Global } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import MainAside from "./components/Aside/MainAside/MainAside";
import Container from "./components/Container/Container";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import { reset } from "./styles/Global/reset";

function App() {
    return (
        <>
            <Global styles={reset} />
            <Container>
                <MainAside />
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/todo" Component={Todo} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
