
v5 DIFF:
https://github.com/mozilla/pdf.js/compare/v5.7.284...edrlab:pdf.js:v5.7.284_BRANCH_modified

v6 DIFF:
https://github.com/mozilla/pdf.js/compare/v6.3.289...edrlab:pdf.js:v6.3.289_BRANCH_modified

Below is a MacOS Apple Container script that uses an ephemeral Linux NodeJS Docker image with a PWD/CWD filesystem mount, to install the NPM package dependencies locally inside the `node_modules` folder (with a "global" cache inside the `.flox/` Flox/Nix folder), and to run the `npm run build` Gulp commands that generate "web" and "types" artefacts inside the git-ignored `build/` folder:

```
set -xv ; container --version ; container system stop ; container system start ; container system status ; container stop test-container ; container rm --force test-container ; container prune ; container list --all ; container run --cpus 10 --memory 12g --platform linux/arm64 --name test-container --volume ${PWD}:/MOUNT -w /MOUNT registry.access.redhat.com/hi/nodejs:latest sh -c 'set -xv ; node --version ; npm --version ; echo $PATH ; env ; export NPM_CONFIG_PREFIX=/MOUNT/.flox/NPM_PREFIX ; export NPM_CONFIG_CACHE=/MOUNT/.flox/NPM_CACHE ; export NODE_PATH=/MOUNT/.flox/NPM_PREFIX/lib/node_modules ; npm install --global npm ; npm install --global sfw ; ls -als /usr/local/lib/node_modules || (ls -als /MOUNT/.flox/NPM_CACHE ; ls -als /MOUNT/.flox/NPM_PREFIX/bin ; ls -als /MOUNT/.flox/NPM_PREFIX/lib/node_modules) ; export PATH="/MOUNT/.flox/NPM_PREFIX/bin:/usr/local/bin:$PATH" ; echo $PATH ; echo $NODE_PATH ; npm --version ; npm config get cache ; npm config get prefix ; rm -f package-lock.json ; sfw npm install --ignore-scripts --foreground-scripts --min-release-age=3 --allow-git=root ; npm run build' ; container list --all ; container stop test-container ; container rm --force test-container ; container prune ; container system status ; container system stop ; set +xv
```

...so assuming `v6.3.289` is the original PDF.js release tag, `v6.3.289_BRANCH` is a branch created at this tag git commit hash, and `v6.3.289_BRANCH_modified` is where we apply our stack of changes (git merge of all our commits so far) ... we can now create a dedicated "build" branch (let's name it `v6.3.289_BUILD`):

```
COMMIT_HASH=$(git rev-parse HEAD)

git checkout --orphan v6.3.289_BUILD

git rm -r --cached .

git add build/gh-pages/build build/gh-pages/web build/types -f

cat << EOF > package.json
{
  "name": "pdf.js",
  "version": "v6.3.289-build.$COMMIT_HASH",
  "type": "module",
  "types": "build/types/src/pdf.d.ts",
  "repository": {
    "type": "git",
    "url": "git://github.com/edrlab/pdf.js.git"
  },
  "engines": {
    "node": ">=20"
  },
  "scripts": {
  },
  "license": "Apache-2.0"
}
EOF

git add package.json

git commit -m "PDF.js v6.3.289-build.$COMMIT_HASH"

git push --set-upstream origin v6.3.289_BUILD

git checkout v6.3.289_BRANCH_modified -f

git prune
```

________________________________________________________________________________________________________________________________________________
________________________________________________________________________________________________________________________________________________
________________________________________________________________________________________________________________________________________________
________________________________________________________________________________________________________________________________________________


```
git checkout master2

# do some change

git commit -a

COMMIT_HASH=$(git rev-parse HEAD)

git checkout --orphan build

git rm -r  --cached .

npm i && npm run build

git add build/gh-pages/build build/gh-pages/web build/types -f

cat << EOF > package.json
{
  "name": "pdf.js",
  "type": "module",
  "types": "build/types/src/pdf.d.ts",
  "repository": {
    "type": "git",
    "url": "git://github.com/edrlab/pdf.js.git"
  },
  "engines": {
    "node": ">=20"
  },
  "scripts": {
  },
  "license": "Apache-2.0"
}
EOF

git add package.json

git commit -m "build $COMMIT_HASH"

git push origin build

git checkout master2 -f

git prune

# ---- NEW BUILD ---- #

git checkout master3

# do some change

git commit -a

COMMIT_HASH=$(git rev-parse HEAD)

git checkout build

git rm -r  --cached .

rm -r ./*

git commit -a -m "build..."

git checkout master3

npm i && npm run build

git checkout build

git add build/gh-pages/build build/gh-pages/web build/types -f

cat << EOF > package.json
{
  "name": "pdf.js",
  "type": "module",
  "types": "build/types/src/pdf.d.ts",
  "repository": {
    "type": "git",
    "url": "git://github.com/edrlab/pdf.js.git"
  },
  "engines": {
    "node": ">=20"
  },
  "scripts": {
  },
  "license": "Apache-2.0"
}
EOF

git add package.json

git commit --amend -m "build $COMMIT_HASH"

```
