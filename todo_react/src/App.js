import { Global } from "@emotion/react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import MainAside from "./components/Aside/MainAside/MainAside";
import Container from "./components/Container/Container";
import Home from "./pages/Home";
import Todo from "./pages/Todo/Todo";
import UserInformation from "./pages/UserInformation/UserInformation";
import { reset } from "./styles/Global/reset";

function App() {
    return (
        <>
            <Global styles={reset} />
            <Container>
                <MainAside />
                <AnimatePresence>
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route
                            path="/userinformation"
                            Component={UserInformation}
                        />
                        <Route path="/todo" Component={Todo} />
                    </Routes>
                </AnimatePresence>
            </Container>
        </>
    );
}

export default App;
