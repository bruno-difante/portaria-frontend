import { useState } from "react";
import { Button } from "../ui/button";
import { Alert } from "../ui/alert";

export default function CadastroItensForm({ onItemAdded }) {
    const [nome, setNome] = useState("");
    const [codigoBarras, setCodigoBarras] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [tipoAlerta, setTipoAlerta] = useState("info");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nome || !codigoBarras) return;

        const response = await fetch("http://localhost:8080/api/itens", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, codigoBarras }),
        });

        if (response.ok) {
            setNome("");
            setCodigoBarras("");
            setMensagem("✅ Item cadastrado com sucesso!");
            setTipoAlerta("success");
            onItemAdded();
        } else {
            setMensagem("❌ Erro ao cadastrar item.");
            setTipoAlerta("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4">
            <h2 className="text-lg font-semibold">Cadastrar novo item</h2>

            <input
                type="text"
                placeholder="Nome do item"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border p-2 rounded"
            />

            <input
                type="text"
                placeholder="Código de barras"
                value={codigoBarras}
                onChange={(e) => setCodigoBarras(e.target.value)}
                className="w-full border p-2 rounded"
            />

            <Button type="submit">Cadastrar</Button>

            {mensagem && <Alert type={tipoAlerta}>{mensagem}</Alert>}
        </form>
    );
}