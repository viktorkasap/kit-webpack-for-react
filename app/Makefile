install:
	npm ci || npm install

rm-rf-css:
	rm -rf public/css

rm-rf-js:
	rm -rf public/js

server:
	NODE_ENV=development npx webpack serve

pretty:
	npx prettier --write src/scss && npx prettier --write src/js

lint:
	npx eslint --fix src/js

build-prod: rm-rf-css rm-rf-js pretty lint
	NODE_ENV=production npx webpack --mode production

build-dev: rm-rf-css rm-rf-js
	NODE_ENV=development npx webpack --mode development

watch: rm-rf-css rm-rf-js
	NODE_ENV=development npx webpack --watch

# for browser-sync
browser:
	npx browser-sync --watch --no-notify --port 4000 --host 0.0.0.0 public
