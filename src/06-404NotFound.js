/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo demuestro como crear una ruta en caso de un
 * 		   error 404.
-------------------------------------------------------------------------- */

import { Routes, Route, Link } from 'react-router-dom';

function App() {
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
