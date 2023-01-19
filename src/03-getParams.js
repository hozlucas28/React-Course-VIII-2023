import { Routes, Route, Link, useMatch, useParams } from 'react-router-dom';

const Proyect = (props) => {
	const match = useMatch('/portfolio/:proyect');
	const params = useParams('/portfolio/:proyect');
	console.log({ match, params });

	const { proyect } = params;

	return <h2>Proyecto: {proyect}</h2>;
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
