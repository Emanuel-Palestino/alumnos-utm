import type { MetaFunction } from "@remix-run/node"


export const meta: MetaFunction = () => {
    return [
        { title: "Alumnos UTM" },
        {
            name: "description",
            charSet: "utf-8",
            content: "Página de Estudiantes de la Universidad Tecnológica de la Mixteca"
        }
    ]
}

export default function Index() {
    return (
        <h1 className="text-2xl">Alumnos UTM</h1>
    )
}
