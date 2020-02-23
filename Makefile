config:
	node ./node_modules/app-json-env-gen/cli.js target=$(env) output=./src/config/env.js

start-local:
	npm install
	make config env=$(env)
	npm start

build:
	npm install
	make config env=$(env)
	npm run build

run-test:
	npm run test:watch

stryker:
	npm run test:mutation


run-api:
	cd api && npm install && npm start 