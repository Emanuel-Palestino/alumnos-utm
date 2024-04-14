import { ItemInformacion } from "./ItemInformacion"


export default function InformacionEstudiante() {

	return (
		<section>
			<h3 className="text-xl font-bold mb-3 text-gray-800">Información Escolar</h3>

			<div className="rounded-xl bg-white p-6">
				<ul className="grid grid-cols-2 gap-4">
					<ItemInformacion contenido="Emanuel Palestino Hernández" titulo="Nombre" />
					<ItemInformacion contenido="2019020337" titulo="Matrícula" />
					<ItemInformacion contenido="Ingeniería en Computación" titulo="Carrera" />
					<ItemInformacion contenido="1002-A" titulo="Grupo" />
					<ItemInformacion contenido="2023 - 2024 B" titulo="Periodo Escolar" />
					<ItemInformacion contenido="123412341234" titulo="Número de Seguro Social" />
					<ItemInformacion contenido="Juanito juanito perez perez" titulo="Asesor" />
				</ul>
			</div>
		</section>
	)

}