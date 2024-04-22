import axios from 'axios'
import { wrapper } from 'axios-cookiejar-support'
import { CookieJar } from 'tough-cookie'

// Crear un nuevo "CookieJar" y asignarlo a "axios"
const cookieJar = new CookieJar()

// Configura axios para almacenar y enviar cookies automáticamente
export const axiosCliente = wrapper(axios.create({
	withCredentials: true,
	jar: cookieJar
}))