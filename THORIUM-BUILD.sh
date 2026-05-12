#!/usr/bin/env bash

set -xe
set -uo pipefail

git checkout master3

# do some change

git commit -a

COMMIT_HASH=$(git rev-parse HEAD)

git checkout build

git rm -r --cached .

rm -r ./*

git commit -a -m "build..."

git checkout master2

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
