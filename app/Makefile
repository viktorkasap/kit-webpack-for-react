install-npm:
	npm ci || npm install

install-yarn:
	yarn install --frozen-lockfile || yarn install

rm-rf-dist:
	rm -rf dist

start:
	NODE_ENV=development npx webpack serve

pretty:
	npx prettier --write src

lint:
	npx eslint --fix src

pre-commit: pretty lint

build-prod: rm-rf-dist pretty lint
	NODE_ENV=production npx webpack --mode production

build-dev: rm-rf-dist pretty lint
	NODE_ENV=development npx webpack --mode development
