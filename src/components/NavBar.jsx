import Widget from '../components/CartWidget';


function Barra () {
    return(
        <header> 

            <Widget />

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Servicios</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Asesoramientos</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Pedidos a Italia</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Traducciones
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Nacimiento</a></li>
                                    <li><a class="dropdown-item" href="#">Defunción</a></li>
                                    <li><a class="dropdown-item" href="#">Matrimonio</a></li>
                                    <li><a class="dropdown-item" href="#">Sentencia de Divorcio</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>

        </header>
    )

}

export default Barra; 