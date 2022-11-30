TypeScript type definitions are generated from the `src` folder into the [types](./types) folder at the root of the repository.

`/PATH/TO/node_modules/.bin/tsc --target ES2020 --allowJS --declaration --outDir ./types --strict --esModuleInterop --forceConsistentCasingInFileNames --emitDeclarationOnly --moduleResolution node src/pdf.js`

`gulp types`
=>
https://github.com/mozilla/pdf.js/blob/fa54a587906100eb8198de2e95d6b1e0bfa88846/gulpfile.js#L1446-L1463
