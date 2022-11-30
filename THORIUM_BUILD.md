0) rm -rf node_modules/ && rm package-lock.json
1) `npm install --legacy-peer-deps`
2) `npm install -g gulp-cli`
3) `gulp test`
4) `gulp web`
5) `cd build/gh-pages`
6) `git push --set-upstream origin gh-pages -f`
7) `cd ../..`
