/* --------------------------------------------------------------------------
 * IMPORTANTE:
 *  			  - <Link> = Se comporta como una etiqueta <a>.
 *  			  - <Routes> = Agrupa las rutas.
 *  			  - <Route> = Define una nueva ruta.
 *  			  - <path> = Defina la ruta para acceder al elemento.
 *  			  - <element> = Define el elemento a renderizar cuando se
 * 								accede a la ruta (<path>).
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
						<Link to="/portfolio">Portafolio</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route
					path="/"
					element={<h1>Inicio</h1>}
				></Route>
				<Route
					path="/portfolio"
					element={<h1>Portafolio</h1>}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
