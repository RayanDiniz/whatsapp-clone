import React from "react";
import "./App.css";
import BarraUser from "./components/BarraUser";
import BarraAviso from "./components/BarraAviso";
import BarraPesquisa from "./components/BarraPesquisa";
import ListaChat from "./components/ListaChat";
import ChatBemvindo from "./components/ChatBemvindo";
const App = () => {
    return(
        <>
            <div className="app-window">
                <div className="sidebar">

                    <BarraUser />
                    <BarraAviso />
                    <BarraPesquisa />
                    <ListaChat />

                </div>

                <div className="chat">

                    <ChatBemvindo />

                </div>
                
            </div>
        </>
    )
}
export default App;