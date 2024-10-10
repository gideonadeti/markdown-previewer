export default function Main() {
  return (
    <main className="flex-grow-1 container-fluid mt-5">
      <div
        className="container row mx-auto gap-5"
        style={{ minHeight: "75vh" }}
      >
        <Markdown />
        <Previewer />
      </div>
    </main>
  );
}

function Markdown() {
  return (
    <div className="col border rounded shadow-sm p-3 d-flex flex-column align-items-center">
      <h2>Markdown</h2>
      <textarea
        className="rounded shadow-sm p-3 form-control flex-grow-1"
        style={{ resize: "none" }}
      />
    </div>
  );
}

function Previewer() {
  return (
    <div className="col border rounded shadow-sm p-3 d-flex flex-column align-items-center">
      <h2>Previewer</h2>
      <div className="rounded shadow-sm p-3 bg-light w-100 flex-grow-1" />
    </div>
  );
}
