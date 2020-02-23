# Pleo.io Front-end Challenge

This repository was created to [Pleo.io](https;//pleo.io) challenge for Front-End Engineer. All content here was created for that and only that reason.

## Structure

With the intention to write a clean code architecture, I decided to split the code between `components` and `smart-components`.

All reusable and dumb code will be defined inside components with the structure:

```bash
├── component
│   ├── Styles.tsx (only if necessary)
│   ├── View.tsx
│   ├── View.test.tsx
│   ├── Interface.ts (only if necessary)
│   ├── index.ts
```

**Note that for all Styles we are using [React Bootstrap](https://react-bootstrap.github.io/) and styled-components**

Complex components will be encapsulated on it's own Context and Provider under smart-components. That will give more reusability for the component itself, once all the structure necessary to render it will be together.

e.g.: We have the smart component `session-manager`, it will check if the user is signed in or not and the sign out feature. So, wherever you want ot use it, will require only to encapsulate the provider.

The structure for smart-component should be like the following:

```bash
├── smart-component
│   ├── store
│   │   ├── Actions.ts
│   │   ├── Reducer.ts
│   │   ├── Reducer.test.ts
│   │   ├── State.ts
│   ├── Provider.tsx
│   ├── Service.ts
│   ├── Service.test.ts
│   ├── index.ts
```

## Running and Testing

### Front-end

You can set all environment variables on `__env__`. For default we have only the local environment, but can be extended for `prod`, `dev`, `qa`, and anything else.

We have the following commands on `Makefile` to help set up and run the project.

|             | Description                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| start-local | Will install all dependencies and start the app on port 8080, you can also set the env you want to run, e.g.: `make start-local env=local` |
| configure   | Will load all the settings for the selected environment, e.g: `make configure env=local`                                                   |
| build       | Will install all dependencies and create the bundle for production                                                                         |
| test        | Will run all tests using react-testing-library                                                                                             |

### API

The api is running inside the Fron-end root directory.

The follwing command should be used on the root of the project (not the api folder), and will set up and start the api.

|         | Description                                            |
| ------- | ------------------------------------------------------ |
| run-api | Will install the packages and run the api on port 3000 |
