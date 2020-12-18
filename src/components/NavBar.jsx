import './menu.css';
import CartWidget from "./CartWidget";


function NavBar({titulo, action}) {
  return (
    <>
        <div>
            <h1 className = "titulo">{titulo}Dossier Italiano</h1>
            <div  className = "container-fluid">
                
                <div className = "row">
                        
                    <div className = "col-sm-10">
                        <nav class="menuppal">
                            <ul>
                                <li><a href = "#">Asesoramientos</a></li>
                                <li><a href = "#">Traducciones</a></li>
                                <li><a href = "#">Pedidos de Partidas</a></li>
                                <li><a href = "#">Turnos</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className = "col-sm-2">
                        <CartWidget action={action} />
                    </div> 

                </div>  

            </div>
        </div> 
    </>
  );
}
export default NavBar;