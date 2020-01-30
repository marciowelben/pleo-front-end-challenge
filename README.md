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

**Note that for all Styles we are using [Mui - Material Ui](https://material-ui.com) as base and styled-components inside it for custom styles**

Pages and complex components will be encapsulated on it's own Context and Provider under smart-components. That will give more reusability for the component itself, once all the structure necessary to render it will be together.

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
│   ├── View.tsx (only if necessary)
│   ├── View.test.tsx
│   ├── Service.ts
│   ├── Service.test.ts
│   ├── Styles.ts (only if necessary)
│   ├── index.ts
```

## Running and Testing

You can set all environment variables on `__env__`. For default we have only the local environment, but can be extended for `prod`, `dev`, `qa`, and anything else.

We have the following commands on `Makefile` to help set up and run the project.

|             | Description                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| start-local | Will install all dependencies and start the app , you can also set the env you want to run, e.g.: `make start-local env=local` |
| configure   | Will load all the settings for the selected environment, e.g: `make configure env=local`                                       |
| build       | Will install all dependencies and create the bundle for production                                                             |
| test        | Will run all tests using react-testing-library                                                                                 |
| stryker     | Will run stryker mutator to mutate all tests and generate a report with uncovered mutated codes.                               |
