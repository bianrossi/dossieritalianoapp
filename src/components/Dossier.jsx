import "./menu.css";
import Logo from '../assets/logo.png';


const Dossier = ({titulo, precio}) => {
    return (
        <article className="Dossier">
            <img src={Logo} alt=""/>
            <div>
                <h3>{titulo}</h3>
                <h3>${precio}</h3>
            </div>
        </article>
    )
}

export default Dossier;