import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

function ErrorPage() {
	const error = useRouteError();
	return (
		<>
			<Navbar />
			<div className="p-5 mx-auto text-center">
				<h1 className="text-5xl font-bold">Oops...</h1>
				<p className="text-3xl">
					{isRouteErrorResponse(error)
						? "This page does not exist."
						: "An unexpected error occurred."}
				</p>
			</div>
		</>
	);
}

export default ErrorPage;
