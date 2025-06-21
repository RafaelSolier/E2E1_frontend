import { createBrowserRouter } from "react-router-dom";
import App from "src/App";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "auth",
				children: [{}, {}],
			},
			{
				path: "/",
				element: <ProtectedRoute />,
				children: [{}, {}, {}, {}],
			},
			{
				path: "*",
			},
		],
	},
]);
