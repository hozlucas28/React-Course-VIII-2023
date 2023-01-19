import { Route, Routes, Link, useNavigate } from 'react-router-dom';

function App() {
	const navigate = useNavigate();

	const forward = () => {
		navigate(1);
	};

	const back = () => {
		navigate(-1);
	};

	const push = (url) => {
		navigate(url);
	};

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

				<button onClick={back}>Back</button>
				<button onClick={forward}>Forward</button>
				<button onClick={() => push('/cerdo-feliz')}>Push</button>
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
				/>
			</Routes>
		</div>
	);
}

export default App;
