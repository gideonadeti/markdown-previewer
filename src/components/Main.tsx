import { useEffect, useState } from "react";
import { marked } from "marked";

export default function Main() {
  const [markdown, setMarkdown] = useState(`Marked - Markdown Parser
========================

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-------------------

1. Type in stuff on the left.
2. See the live updates on the right.

That's it.  Pretty simple.  There's also a drop-down option above to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing?  Either start changing stuff on the left or
[clear everything](/demo/?text=) with a simple click.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/
`);
  const [parsedMarkdown, setParsedMarkdown] = useState("");

  useEffect(() => {
    async function parseMarkdown() {
      const parsedMarkdown = await marked(markdown);
      setParsedMarkdown(parsedMarkdown);
    }

    parseMarkdown();
  }, [markdown]);

  return (
    <main className="flex-grow-1 container-fluid mt-5 pb-5">
      <div
        className="container row mx-auto gap-5"
        style={{ minHeight: "75vh" }}
      >
        <Markdown markdown={markdown} setMarkdown={setMarkdown} />
        <Previewer parsedMarkdown={parsedMarkdown} />
      </div>
    </main>
  );
}

function Markdown({
  markdown,
  setMarkdown,
}: {
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="col border rounded shadow-sm p-3 d-flex flex-column align-items-center">
      <h2>Markdown</h2>
      <textarea
        className="rounded shadow-sm p-3 form-control flex-grow-1"
        style={{ resize: "none" }}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
    </div>
  );
}

function Previewer({ parsedMarkdown }: { parsedMarkdown: string }) {
  return (
    <div className="col border rounded shadow-sm p-3 d-flex flex-column align-items-center">
      <h2>Previewer</h2>
      <div
        className="rounded shadow-sm p-3 bg-light w-100 flex-grow-1 overflow-auto"
        dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
      />
    </div>
  );
}
