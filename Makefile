config:
	node ./node_modules/app-json-env-gen/cli.js target=$(env) output=./src/config/constants/env.js

start-local:
	npm install
	make config env=$(env)
	npm start

build:
	npm install
	make config env=$(env)
	npm run build

build:
	npm run test:watch

stryker:
	npm run test:mutation