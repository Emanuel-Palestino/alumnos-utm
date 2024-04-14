import InformacionEstudiante from "~/components/InformacionEstudiante";

export default function Inicio() {

	return (
		<main className="flex gap-8">
			<InformacionEstudiante />

			<section className="min-w-80">
				<h3 className="text-xl font-bold mb-3 text-gray-800">Calendario Escolar</h3>

				<div className="rounded-xl bg-white p-6">
					En construcción...
				</div>
			</section>

			<section className="min-w-80">
				<h3 className="text-xl font-bold mb-3 text-gray-800">Reporte de Lectura</h3>

				<div className="rounded-xl bg-white p-6">
					En construcción...
				</div>
			</section>
		</main>
	)

}
