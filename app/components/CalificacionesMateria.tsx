import { FC } from "react"


interface CalificacionesMateriaProps {
	materia: string
}

export const CalificacionesMateria: FC<CalificacionesMateriaProps> = ({ materia }) => {

	return (
		<article className="rounded-xl bg-white px-4 py-3 w-96">
			<div className="flex items-center justify-center mb-2 h-16">
				<h4 className="text-2xl font-semibold text-center">{materia}</h4>
			</div>

			<table className="text-center">
				<thead>
					<tr>
						<th className="text-sm text-left font-normal text-gray-400 px-4 py-1">Evaluación</th>
						<th className="text-sm font-normal text-gray-400 px-4 py-1">Asistencia</th>
						<th className="text-sm font-normal text-gray-400 px-4 py-1">Calificación</th>
					</tr>
				</thead>

				<tbody>
					<Evaluacion nombre="Primer Parcial" porcentaje="40%" calificacion="9.5" />
					<Evaluacion nombre="Segundo Parcial" porcentaje="80%" calificacion="8.5" />
					<Evaluacion nombre="Tercer Parcial" porcentaje="90%" calificacion="5.5" />
					<Evaluacion nombre="Proyecto Final" porcentaje="100%" calificacion="10" />
				</tbody>

				<tfoot>
					<tr>
						<td className="text-left px-4 py-2 font-semibold text-lg">Promedio Final</td>
						<td></td>
						<td className="px-4 py-2 font-bold text-lg">9.8</td>
					</tr>
				</tfoot>
			</table>
		</article>
	)

}


interface EvaluacionProps {
	nombre: string
	porcentaje: string
	calificacion: string
}

const Evaluacion: FC<EvaluacionProps> = ({ nombre, porcentaje, calificacion }) => {

	return (
		<tr className="border-b border-gray-200">
			<td className="text-left px-4 py-2">{nombre}</td>
			<td className="px-4 py-2">{porcentaje}</td>
			<td className="px-4 py-2 font-semibold">{calificacion}</td>
		</tr>
	)

}