
import chat from "./assets/chats.png";
import "./ChatBemvindo.css";
const ChatBemvindo = () => {
    return(
        <div className="chat-space">
            <div className="chat-box">
                <img src={chat}></img>
                <div className="msg">
                    <h1 className="title-msg">Mantenha seu celular conectado</h1>
                    <div className="descri-msg">O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</div>
                </div>
            </div>
        </div>
    )
}
export default ChatBemvindo;