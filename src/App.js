import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import CadastroItens from "./pages/CadastroItens"
import CadastroUsuarios from "./pages/CadastroUsuarios"
// Historico pode ser criado depois
// import Historico from "./pages/Historico"

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-zinc-100 p-6">
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-blue-600">Portaria UFN</h1>
                </header>

                {/* Menu de navegação */}
                <nav className="flex justify-center gap-4 mb-6">
                    <Link to="/" className="text-blue-600 hover:underline">Início</Link>
                    <Link to="/itens" className="text-blue-600 hover:underline">Itens</Link>
                    <Link to="/usuarios" className="text-blue-600 hover:underline">Usuários</Link>
                    <Link to="/historico" className="text-blue-600 hover:underline">Histórico</Link>
                </nav>

                {/* Rotas */}
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/itens" element={<CadastroItens />} />
                    <Route path="/usuarios" element={<CadastroUsuarios />} />
                    {/* Quando criar, basta importar e descomentar a linha abaixo */}
                    {/* <Route path="/historico" element={<Historico />} /> */}
                </Routes>
            </div>
        </Router>
    )
}

export default App