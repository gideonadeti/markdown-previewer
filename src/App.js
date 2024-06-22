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
			<main className="flex-grow-1">
				<div className="container p-4 mt-3 mt-md-4 mt-lg-5">
					<div className="row row-cols-1 row-cols-md-2 flex-md-nowrap justify-content-center gap-3">
						<div
							className="col border border-3 shadow-sm py-2 px-3 bg-white rounded"
							style={{ minHeight: "70vh" }}
						>
							<h2 className="text-center">Markdown</h2>
							<textarea
								className="markdown rounded shadow-sm p-2"
								style={{
									width: "100%",
									height: "88%",
									overflow: "hidden",
								}}
							></textarea>
						</div>
						<div
							className="col border border-3 shadow-sm py-2 px-3 bg-white rounded"
							style={{ minHeight: "70vh" }}
						>
							<h2 className="text-center">Previewer</h2>
							<div className="previewer"></div>
						</div>
					</div>
				</div>
			</main>
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
