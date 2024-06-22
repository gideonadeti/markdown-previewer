import { useState } from 'react'
import { marked } from 'marked'

function App () {
  const [markdown, setMarkdown] = useState(
		`# Hello, World
## This is a sub-header (H2 size)

[This is a link](https://www.example.com)

Here is some \`inline code\`

\`\`\`
// This is a code block
function example() {
  console.log("Hello, world!");
}
\`\`\`

- This is a list item

> This is a blockquote

![This is an image](https://via.placeholder.com/150)

**This is bolded text**
`
  )

  marked.setOptions({
    breaks: true
  })

  return (
    <div className='bg-light d-flex flex-column min-vh-100'>
      <header>
        <nav className='navbar bg-body-tertiary border-bottom border-2'>
          <div className='container-fluid'>
            <span className='navbar-brand mb-0 h1 fw-bold fs-3 mx-auto'>
              Markdown Previewer
            </span>
          </div>
        </nav>
      </header>
      <main className='flex-grow-1'>
        <div className='container p-4 mt-3 mt-md-4 mt-lg-5'>
          <div className='row row-cols-1 row-cols-md-2 flex-md-nowrap justify-content-center gap-3'>
            <div
              className='col border border-3 shadow-sm py-2 px-3 bg-white rounded'
              style={{ minHeight: '70vh' }}
            >
              <h2 className='text-center'>Markdown</h2>
              <textarea
                className='markdown rounded shadow-sm p-2'
                id='editor'
                style={{
								  width: '100%',
								  height: '88%',
								  overflow: 'hidden'
                }}
                value={markdown}
                onChange={(event) => {
								  setMarkdown(event.target.value)
                }}
              />
            </div>
            <div
              className='col border border-3 shadow-sm pt-2 pb-4 px-3 bg-white rounded'
              style={{ minHeight: '70vh' }}
            >
              <h2 className='text-center'>Previewer</h2>
              <div
                className='previewer rounded bg-light p-2'
                id='preview'
                dangerouslySetInnerHTML={{
								  __html: marked(markdown)
                }}
              />
            </div>
          </div>
        </div>
      </main>
      <footer className='container text-center fw-medium text-secondary mt-auto'>
        <p>
          &copy; {new Date().getFullYear()} Markdown Previewer.
          Created By{' '}
          <a
            className='text-primary'
            href='https://github.com/GDA0'
            target='_blank'
            rel='noopener noreferrer'
          >
            Gideon D. Adeti
          </a>
          . All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
