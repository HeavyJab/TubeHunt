# Tubehunt

## Dev
- `npm install` - Install deps.
- `npm run clean` - Clean up `dist` build folder.
- `npm run watch:all` - Hot reload entire extension.
- `auto/test` - Run tests in watch mode.
- `auto/dev` - Convenience for `clean` and `watch:all`.
- `auto/build-prod` - Build minified bundle for production.

When you run the parcel dev server (e.g. using `auto/dev`), you'll be able to visit your pages by visiting the path of the page at `http://localhost:1234/path/in/dist/folder`.

For example, to view:
- popup page -> `http://localhost:1234/popup/popup.html`
- content page, `http://localhost:1234/content/dummy-content.html` (this works by having a dummy content page that loads the content script.)
