import { CalificacionesMateria } from "~/components/CalificacionesMateria";

export default function Calificaciones() {

	return (
		<main>
			<h2 className="text-2xl font-bold mb-6">Calificaciones</h2>

			<section >

				<div className="rounded-xl bg-white px-6 py-4 w-fit mb-6">
					<p className="mb-2">Selecciona un Semestre:</p>
					<div className="flex gap-x-3">
						<button className="rounded-xl bg-gray-100 hover:bg-gray-200 px-4 [&.activo]:bg-gray-700 [&.activo]:text-white py-2 transition-colors duration-200 ease-in-out">Primero</button>
						<button className="rounded-xl bg-gray-100 hover:bg-gray-200 px-4 [&.activo]:bg-gray-700 [&.activo]:text-white py-2 transition-colors duration-200 ease-in-out">Segundo</button>
						<button className="rounded-xl bg-gray-100 hover:bg-gray-200 px-4 [&.activo]:bg-gray-700 [&.activo]:text-white py-2 transition-colors duration-200 ease-in-out activo">Tercero</button>
					</div>
				</div>

				<div className="flex gap-8 flex-wrap justify-center">
					<CalificacionesMateria
						materia="Métodos Numéricos"
					/>

					<CalificacionesMateria
						materia="Desarrollo De Aplicaciones Para Dispositivos Móviles"
					/>

					<CalificacionesMateria
						materia="Interacción Humano Computadora"
					/>

					<CalificacionesMateria
						materia="Desarrollo De Videojuegos"
					/>

					<CalificacionesMateria
						materia="Historia Del Pensamiento Filosófico"
					/>
				</div>

			</section>
		</main>
	)

}