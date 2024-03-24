const React = require('react')

function Default(html) {
  return (
    <html>
      <head>
        <title>{html.title || 'Default'}</title>
      </head>
      <body>
        <h1>HTML Rendered!</h1>
        {html.children}
        <div className="container">
        </div>
      </body>
    </html>
  )
}

module.exports = Default
