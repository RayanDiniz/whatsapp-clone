import React from "react";
import "./App.css";
const App = () => {
    return (
        <>
            <div className="app-window">

                <div className="sidebar">
                    
                    <header className="barra">
                        <div className="barra-do-usuario">
                            barra do usario
                        </div>
                    </header>

                    <span className="barra-de-aviso">
                        avisos
                    </span>

                    <div className="barra-de-pesquisa">
                        pesquisa
                    </div>
                    
                    <div className="dms">
                        local com as convessas do usuario
                    </div>

                </div>

                <div className="chat">
                    aqui fica o chat
                </div>

            </div>
        </>
    )
}
export default App;