import { createBrowserRouter } from "react-router-dom";
import Content from "./components/Content";
import Editor from "./components/Editor";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Content /> },
			{ path: "write", element: <Editor /> },
		],
	},
]);

export default router;
