/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra como crear un menú de navegación.
 *
 *
 * IMPORTANTE:
 *  			  - <NavLink> = Igual al <Link> pero utiliza la propiedad
 * 								<isActive>, siendo verdadera cuando me
 * 								encuentro en dicha ruta.
 *  			  - <end> = Me permite establecer que la única <NavLink> con
 * 							la propiedad <isActive> sea en la que me encuentro,
 * 							y no el/los padre/s de esta.
-------------------------------------------------------------------------- */

import { Routes, Route, NavLink, useMatch } from 'react-router-dom';

const Proyect = (props) => {
	const match = useMatch('/portfolio/:proyect');
	const { proyect } = match.params;

	return <h2>Proyecto: {proyect}</h2>;
};

const Portfolio = () => {
	return (
		<div>
			<h1>Portafolio</h1>
			<ul>
				<li>
					<NavLink
						to="project-1"
						style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
						end
					>
						Proyecto 1
					</NavLink>
				</li>
				<li>
					<NavLink
						to="project-2"
						style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
						end
					>
						Proyecto 2
					</NavLink>
				</li>
			</ul>

			<Routes>
				<Route
					path=":proyect"
					element={<Proyect />}
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
						<NavLink
							style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
							to="/"
							end
						>
							Inicio
						</NavLink>
					</li>
					<li>
						<NavLink
							style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
							to="/portfolio"
							end
						>
							Portafolio
						</NavLink>
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
