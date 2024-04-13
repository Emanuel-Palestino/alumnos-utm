import { FC } from "react"

interface ItemInformacionProps {
	contenido: string
	titulo: string
}

export const ItemInformacion: FC<ItemInformacionProps> = ({
	contenido,
	titulo
}) => {

	return (
		<li className="flex flex-col justify-center items-center gap-x-4 p-4 rounded-xl border border-gray-200">
			<p className="font-semibold text-center">{contenido}</p>
			<span className="text-gray-400 text-center text-sm select-none">{titulo}</span>
		</li>
	)

}