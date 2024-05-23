import Cabecalho from "./Modules/Cabecalho/index.jsx";
import Rodape from "./Modules/Rodape/index.jsx";
import FavoritosProvider from "./contextos/Favoritos.jsx";
import Favoritos from "./pages/Favoritos/index.jsx";
import Inicio from "./pages/Inicio/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "./pages/Player/index.jsx";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <FavoritosProvider>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                    <Route path="/:id" element={<Player />} />
                </Routes>
            </FavoritosProvider>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;