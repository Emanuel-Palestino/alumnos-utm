import { ActionFunctionArgs, json } from "@remix-run/node"
import { axiosCliente } from "~/helpers/constants"


export async function action({
	request
}: ActionFunctionArgs) {

	// Si la petición no es de tipo POST, retorna un error
	if (request.method !== 'POST')
		return json({ message: 'Bad request' }, 400)


	// Obtejer data del body
	const data = await request.json()

	const respuestaLogin = await axiosCliente.post('https://alumnos.utm.mx/user_sessions', {
		'user_session[login]': data.matricula,
		'user_session[password]': data.contraseña,
		'authenticity_token': data.token
	}, {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})

	const respuestaHTML = respuestaLogin.data
	// Verificar si regresa el form de login (login incorrecto)
	if (respuestaHTML.includes('<form class="new_user_session" id="new_user_session"'))
		return json({ message: 'Credenciales incorrectas' }, 401)

	// De lo contrario login correcto
	return json({ message: 'Login correcto' }, 200)

}