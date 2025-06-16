import { useEffect, useState } from "react";
import CadastroUsuariosForm from "../components/usuarios/CadastroUsuariosForm";

export default function CadastroUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    const carregarUsuarios = async () => {
        const response = await fetch("http://localhost:8080/api/usuarios");
        const data = await response.json();
        setUsuarios(data);
    };

    useEffect(() => {
        carregarUsuarios();
    }, []);

    return (
        <div className="space-y-6">
            <CadastroUsuariosForm onUsuarioAdicionado={carregarUsuarios} />

            <h2 className="text-xl font-bold mt-8">Usuários cadastrados</h2>
            <ul className="space-y-2">
                {usuarios.map((usuario) => (
                    <li key={usuario.id} className="bg-white p-4 rounded shadow">
                        <strong>{usuario.nome}</strong> — Matrícula: {usuario.matricula} —{" "}
                        <span className="text-gray-500">{usuario.codigoBarras}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}