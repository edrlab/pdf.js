TypeScript type definitions are generated from the `src` folder into the [types](./types) folder at the root of the repository.

`/PATH/TO/node_modules/.bin/tsc --target ES2020 --allowJS --declaration --outDir ./types --strict --esModuleInterop --forceConsistentCasingInFileNames --emitDeclarationOnly --moduleResolution node src/pdf.js`

https://github.com/mozilla/pdf.js/blob/5d251a3a3e7bfaa8fbfa07f0b7f9901eb3f999d9/gulpfile.js#L1374-L1385

https://github.com/mozilla/pdf.js/blob/master/gulpfile.js#L1375-L1388
