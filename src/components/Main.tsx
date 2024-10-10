export default function Main() {
  return (
    <main className="flex-grow-1 container-fluid mt-5">
      <div className="container row mx-auto gap-5">
        <Markdown />
        <Previewer />
      </div>
    </main>
  );
}

function Markdown() {
  return <div className="col border rounded shadow-sm p-3"></div>;
}

function Previewer() {
  return <div className="col border rounded shadow-sm p-3"></div>;
}
