import { Routes, Route, Link, Navigate } from 'react-router-dom';

const Portfolio = () => {
	const loggedIn = false;

	if (!loggedIn) {
		return <Navigate to="/" />;
	}

	return <h1>Portafolio</h1>;
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
						<Link to="/profile">Perfil</Link>
					</li>
					<li>
						<Link to="/portfolio">Portafolio</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route
					path="/"
					element={<Navigate to="/home" />}
				/>
				<Route
					path="/home"
					element={<h1>Inicio</h1>}
				></Route>
				<Route
					path="/profile"
					element={<h1>Perfil</h1>}
				></Route>
				<Route
					path="/portfolio"
					element={<Portfolio />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
