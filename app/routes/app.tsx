import { Outlet } from "@remix-run/react"
import Navbar from "../components/Navbar"


export default function App() {

	return (
		<div className="w-full px-4 py-6">
			<Navbar />
			<div className="px-6">
				<Outlet />
			</div>
		</div>
	)

}