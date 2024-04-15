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
        <main className="container m-auto py-12 sm:px-0 px-3">
            <h1 className="text-3xl font-semibold text-center mb-10">Alumnos UTM</h1>

            <section className="rounded-xl bg-white px-8 sm:px-12 sm:py-6 py-4 w-full max-w-[480px] m-auto">
                <h3 className="text-center text-lg mb-6 font-semibold">Iniciar Sesión</h3>

                <form action="">
                    <div className="w-full flex flex-col gap-1 mb-4">
                        <label htmlFor="matricula">Matrícula:</label>
                        <input
                            id="matricula"
                            className="border border-gray-300 rounded-xl px-4 py-2 outline-gray-500"
                            type="number"
                            placeholder="2000010101"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-1 mb-4">
                        <label htmlFor="contraseña">Contraseña:</label>
                        <input
                            id="contraseña"
                            className="border border-gray-300 rounded-xl px-4 py-2 outline-gray-500"
                            type="password"
                            placeholder="contraseña123"
                        />
                    </div>

                    <div className="w-full flex gap-x-2 mb-4">
                        <input type="checkbox" id="recordar" className="w-4" />
                        <label htmlFor="recordar">Recordar</label>
                    </div>

                    <button
                        className="w-full bg-orange-800 hover:bg-orange-900 active:bg-orange-700 text-white rounded-xl py-2 transition-colors duration-200 ease-in-out mt-6"
                        type="submit"
                    >
                        Ingresar
                    </button>

                    <small
                        className="text-gray-400 block mt-4 text-center"
                    >
                        Debes ingresar con los mismos accesos que utilizas en el <a className="underline" href="https://alumnos.utm.mx/" target="_blank" rel="noreferrer">NES</a>
                    </small>
                </form>
            </section>

            <section className="rounded-xl bg-white px-8 sm:px-12 sm:py-6 py-4 w-full mt-20">
                <p className="mb-3">Esta página es un cliente alternativo y <b>NO OFICIAL</b> diseñado para la página de <strong>estudiantes de la Universidad Tecnológica de la Mixteca</strong>, y no está afiliado, autorizado ni avalado por la misma.</p>
                <p className="mb-3"> El propósito de este proyecto es ofrecer una <b>experiencia de usuario mejorada</b>, con actualizaciones continuas, una respuesta más rápida y una visualización de datos optimizada.</p>
                <p>Es importante destacar que este cliente es un proyecto de código abierto creado con fines educativos, por lo que puedes visualizar el código utilizado y <b>NO ALMACENAMOS</b> datos personales en ninguna plataforma externa.</p>
            </section>
        </main>
    )
}
