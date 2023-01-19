/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra como obtener parámetros enviados a
 * 		   través de la URL.
 *
 *
 * IMPORTANTE:
 *  			  - <useMatch> = Me otorga toda la información del navegador
 * 								 de la aplicación (ruta, historial, parámetros,
 * 								 etc.).
 *  			  - <useParams> = Me devuelve los parámetros de la ruta.
-------------------------------------------------------------------------- */

import { Routes, Route, Link, useMatch, useParams } from 'react-router-dom';

const Project = (props) => {
	const match = useMatch('/portfolio/:project');
	const params = useParams('/portfolio/:project');
	console.log({ match, params });

	const { project } = params;

	return <h2>Proyecto: {project}</h2>;
};

const Portfolio = () => {
	return (
		<div>
			<h1>Portafolio</h1>
			<ul>
				<li>
					<Link to="project-1">Proyecto 1</Link>
				</li>
				<li>
					<Link to="project-2">Proyecto 2</Link>
				</li>
			</ul>

			<Routes>
				<Route
					path=":project"
					element={<Project />}
				/>
			</Routes>
		</div>
	);
};

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
				/>
				<Route
					path="/portfolio/*"
					element={<Portfolio />}
				/>
			</Routes>
		</div>
	);
}

export default App;
