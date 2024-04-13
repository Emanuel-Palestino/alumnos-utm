import { NavLink } from "@remix-run/react"


export default function Navbar() {

	return (
		<header>
			<picture>
				<h1>Alumnos UTM</h1>
			</picture>

			<nav>
				<ul>
					<li>
						<NavLink to="/inicio">Inicio</NavLink>
					</li>
					<li>
						<NavLink to="/calificaciones">Calificaciones</NavLink>
					</li>
				</ul>
			</nav>

			<button>
				Cuenta
			</button>
		</header>
	)

}