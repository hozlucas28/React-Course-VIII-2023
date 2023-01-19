/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo demuestro como obtener consultas específicas de
 * 		   la URL.
-------------------------------------------------------------------------- */

import { Routes, Route, Link, useLocation } from 'react-router-dom';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function App() {
	const query = useQuery();

	const pig = query.get('pig');
	const name = query.get('name');
	console.log({ pig, name });

	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Inicio</Link>
					</li>
					<li>
						<Link to="/profile">Perfil</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route
					path="/"
					element={<h1>Inicio</h1>}
				></Route>
				<Route
					path="/profile"
					element={<h1>Perfil</h1>}
				></Route>
				<Route
					path="*"
					element={<h1>404: No encontrada</h1>}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
