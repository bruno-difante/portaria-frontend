import { useState } from "react"
import { Button } from "../components/ui/button"
import { Alert } from "../components/ui/alert"

export default function Dashboard() {
    const [usuario, setUsuario] = useState("")
    const [item, setItem] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [tipoMensagem, setTipoMensagem] = useState("info")

    const handleEmprestimo = async () => {
        try {
            const res = await fetch("http://localhost:8080/api/movimentacoes/emprestimo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idUsuario: usuario, idItem: item }),
            })

            if (res.ok) {
                setTipoMensagem("success")
                setMensagem("✅ Empréstimo registrado com sucesso!")
            } else {
                const erro = await res.text()
                setTipoMensagem("error")
                setMensagem(`❌ Erro ao registrar empréstimo: ${erro}`)
            }
        } catch (error) {
            setTipoMensagem("error")
            setMensagem("❌ Erro de conexão com o servidor.")
        }
    }

    const handleDevolucao = async () => {
        try {
            const res = await fetch("http://localhost:8080/api/movimentacoes/devolucao", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idUsuario: usuario, idItem: item }),
            })

            if (res.ok) {
                setTipoMensagem("success")
                setMensagem("✅ Devolução registrada com sucesso!")
            } else {
                const erro = await res.text()
                setTipoMensagem("error")
                setMensagem(`❌ Erro ao registrar devolução: ${erro}`)
            }
        } catch (error) {
            setTipoMensagem("error")
            setMensagem("❌ Erro de conexão com o servidor.")
        }
    }

    return (
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-bold text-blue-600">Registrar Empréstimo ou Devolução</h2>

            <input
                type="text"
                placeholder="Código do Usuário"
                className="w-full border border-zinc-300 rounded px-3 py-2"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
            />

            <input
                type="text"
                placeholder="Código do Item"
                className="w-full border border-zinc-300 rounded px-3 py-2"
                value={item}
                onChange={(e) => setItem(e.target.value)}
            />

            <div className="flex justify-between gap-4">
                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleEmprestimo}>
                    Fazer Empréstimo
                </Button>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700" onClick={handleDevolucao}>
                    Fazer Devolução
                </Button>
            </div>

            {mensagem && (
                <Alert type={tipoMensagem}>{mensagem}</Alert>
            )}
        </div>
    )
}