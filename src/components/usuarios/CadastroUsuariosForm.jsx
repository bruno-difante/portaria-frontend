import { useState } from "react";
import { Button } from "../ui/button";
import { Alert } from "../ui/alert";

export default function CadastroUsuariosForm({ onUsuarioAdicionado }) {
    const [nome, setNome] = useState("");
    const [matricula, setMatricula] = useState("");
    const [codigoBarras, setCodigoBarras] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [tipoAlerta, setTipoAlerta] = useState("info");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:8080/api/usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, matricula, codigoBarras })
        });

        if (res.ok) {
            setNome("");
            setMatricula("");
            setCodigoBarras("");
            setMensagem("✅ Usuário cadastrado com sucesso!");
            setTipoAlerta("success");
            onUsuarioAdicionado();
        } else {
            setMensagem("❌ Erro ao cadastrar usuário.");
            setTipoAlerta("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold">Cadastrar novo usuário</h2>

            <input
                type="text"
                placeholder="Nome completo"
                className="w-full border border-zinc-300 rounded px-3 py-2"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Matrícula"
                className="w-full border border-zinc-300 rounded px-3 py-2"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Código de barras"
                className="w-full border border-zinc-300 rounded px-3 py-2"
                value={codigoBarras}
                onChange={(e) => setCodigoBarras(e.target.value)}
                required
            />

            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Cadastrar usuário
            </Button>

            {mensagem && <Alert type={tipoAlerta}>{mensagem}</Alert>}
        </form>
    );
}