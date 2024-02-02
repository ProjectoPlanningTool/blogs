import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
	return (
		<div className="overflow-x-hidden h-screen">
			<Navbar />
			<Outlet />
		</div>
	);
}

export default Layout;
