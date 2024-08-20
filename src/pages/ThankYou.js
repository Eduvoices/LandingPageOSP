import { useNavigate } from "react-router-dom"
import logo from '../assets/logo_mos.png'

const ThankYouPage = () => {
    const navigate = useNavigate()
    return (
        <div className="exception-body access-denied">
            <div className="exception-panel"></div>

            <div className="exception-content">
                <img src={logo} alt="imagem de fundo"/>

                <h1>
                    <span className="exception-name">Obrigado pelo</span> contato
                </h1>
                <button onClick={()=>navigate('/')} id='button_a'>Retornar à página inicial</button>
            </div>
        </div>
    )
}

export default ThankYouPage
