TypeScript type definitions are generated from the `src` folder into the [types](./types) folder at the root of the repository.

`/PATH/TO/node_modules/.bin/tsc --target ES2020 --allowJS --declaration --outDir ./types --strict --esModuleInterop --forceConsistentCasingInFileNames --emitDeclarationOnly src/pdf.js`

https://github.com/mozilla/pdf.js/blob/6249ef517d3aaacc9aa6c9e1f5377acfaa4bc2a7/gulpfile.js#L1375-L1388

https://github.com/mozilla/pdf.js/blob/master/gulpfile.js#L1375-L1388
