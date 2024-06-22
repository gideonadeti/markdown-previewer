import "./App.css";

function App() {
	return (
		<div className="bg-light d-flex flex-column min-vh-100">
			<header>
				<nav className="navbar bg-body-tertiary border-bottom border-2">
					<div className="container-fluid">
						<span className="navbar-brand mb-0 h1 fw-bold fs-3 mx-auto">
							Markdown Previewer
						</span>
					</div>
				</nav>
			</header>
			<main className="flex-grow-1"></main>
			<footer className="container text-center fw-medium text-secondary mt-auto">
				<p>
					&copy; {new Date().getFullYear()} Markdown Previewer.
					Created By{" "}
					<a
						className="text-primary"
						href="https://github.com/GDA0"
						target="_blank"
						rel="noopener noreferrer"
					>
						Gideon D. Adeti
					</a>
					. All Rights Reserved.
				</p>
			</footer>
		</div>
	);
}

export default App;
