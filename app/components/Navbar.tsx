import { NavLink } from "@remix-run/react"
import AjustesIcon from "~/icons/Ajustes"
import CalificacionIcon from "~/icons/Calificacion"
import HomeIcon from "~/icons/Home"
import SalirIcon from "~/icons/Salir"


export default function Navbar() {

	return (
		<header className="sticky top-6 w-full rounded-3xl bg-white py-4 px-8 flex items-center justify-between mb-6">
			<picture>
				<h1 className="text-lg">Alumnos UTM</h1>
			</picture>

			<nav>
				<ul className="flex gap-x-4">
					<li>
						<NavLink
							to="/app"
							end
							className="flex items-center gap-x-2 py-2 px-4 text-gray-500 hover:text-gray-900 transition-colors duration-200 ease-in-out rounded-xl [&.active]:bg-gray-100"
						>
							<HomeIcon />
							Inicio
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/app/calificaciones"
							end
							className="flex items-center gap-x-2 py-2 px-4 text-gray-500 hover:text-gray-900 transition-colors duration-200 ease-in-out rounded-xl [&.active]:bg-gray-100"
						>
							<CalificacionIcon />
							Calificaciones
						</NavLink>
					</li>
				</ul>
			</nav>

			<div className="flex gap-x-2">
				<button className="p-3 rounded-xl hover:bg-gray-100">
					<AjustesIcon />
				</button>

				<button className="p-3 rounded-xl hover:bg-gray-100">
					<SalirIcon />
				</button>
			</div>
		</header>
	)

}