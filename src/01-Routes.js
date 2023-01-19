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
