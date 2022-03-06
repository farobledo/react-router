import { NavLink } from "react-router-dom";

export default function Inicio() {
    return <div>
        

            

                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div class="container-fluid">
                        <NavLink class="navbar-brand" to="/">Inicio</NavLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarColor01">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" href="/crear">Crear
                                        <span class="visually-hidden">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/login">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/telas">Telas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/productos">Productos</a>
                                </li>
                            
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-sm-2" type="text" placeholder="Search"></input>
                                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

            

        

    </div>
}