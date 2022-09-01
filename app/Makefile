install:
	npm ci || npm install

rm-rf-css:
	rm -rf public/css

rm-rf-js:
	rm -rf public/js

server:
	NODE_ENV=development npx webpack serve

pretty:
	npx prettier --write src

lint:
	npx eslint --fix src

pre-commit: pretty lint

build-prod: rm-rf-css rm-rf-js pretty lint
	NODE_ENV=production npx webpack --mode production

build-dev: rm-rf-css rm-rf-js
	NODE_ENV=development npx webpack --mode development

watch: rm-rf-css rm-rf-js
	NODE_ENV=development npx webpack --watch

