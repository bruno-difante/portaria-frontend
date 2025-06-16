import { useEffect, useState } from "react";
import CadastroItensForm from "../components/itens/CadastroItensForm";

export default function CadastroItens() {
    const [itens, setItens] = useState([]);

    const carregarItens = async () => {
        const response = await fetch("http://localhost:8080/api/itens");
        const data = await response.json();
        setItens(data);
    };

    useEffect(() => {
        carregarItens();
    }, []);

    return (
        <div className="space-y-6">
            <CadastroItensForm onItemAdded={carregarItens} />

            <h2 className="text-xl font-bold mt-8">Itens cadastrados</h2>
            <ul className="space-y-2">
                {itens.map((item) => (
                    <li key={item.id} className="bg-white p-4 rounded shadow">
                        <strong>{item.nome}</strong> — <span className="text-gray-500">{item.codigoBarras}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}