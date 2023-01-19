import { Routes, Route, Link } from 'react-router-dom';

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
					path="project-1"
					element={<h1>Proyecto 1</h1>}
				/>
				<Route
					path="project-2"
					element={<h1>Proyecto 2</h1>}
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
