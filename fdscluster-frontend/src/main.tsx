import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, useRoutes} from "react-router-dom";
import routes from "virtual:generated-pages-react";

/**
 * The main application component.
 * Uses `useRoutes` to render the routes defined in the `routes` object.
 *
 * @returns {JSX.Element} The rendered routes.
 */
const App = (): JSX.Element => {
	return useRoutes(routes) as JSX.Element;
};

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</StrictMode>,
)