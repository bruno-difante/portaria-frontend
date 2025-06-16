import { cn } from "../../lib/utils"

export function Alert({ type = "info", children }) {
    const baseStyle = "w-full p-3 rounded border text-sm font-medium"
    const styles = {
        success: "bg-green-100 text-green-800 border-green-300",
        error: "bg-red-100 text-red-800 border-red-300",
        info: "bg-blue-100 text-blue-800 border-blue-300",
        warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
    }

    return (
        <div className={cn(baseStyle, styles[type])}>
            {children}
        </div>
    )
}