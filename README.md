# Pleo.io Front-end Challenge

This repository was created to [Pleo.io](https;//pleo.io) challenge for Front-End Engineer. All content here was created for that and only that reason.

## About the Challenge

It was requested me to write a front-end using the api provided (adjustments were allowed). However, some pointrs was supposed to be taken.
The user should be able to add Receipts and Comments to an expense.
With that functionalitie I also created some to remove or edit comments and remove receipts.

The filter was implemented like a search bar, the user can filter by any term (excluding dates).

The project took like 30 hours to be completed.

The ui is responsive and with a good look.

The `expenses` smart component have unit and integration tests.

The system have a multilanguage support using i18n for react.

## Biggest challenges

The challenge at all it's very simple, but I had not too much time to implement. Therefore I had to skip some functionalities that I was intending to implement.
But the ui was the biggest challenge on my opnion, I like to build UI but I prefer to work with it's contruction proccess.

## What could be improved?

Well, I was intending to create a sorting and filter in the api, to be more friendly user, but unforntunately the challenge requested a client-side feature, so I decided to implement in the most simple way.

I could also improve the filter, it could highlight the matches, so the user would know why the result is being displayed.

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

### Features

-   Filter
-   Comments
-   Receipts
-   Sorting

#### Filter by term

You can type in a search bar, any term you want to look for. It could be a user name, email, value of receipt, id, or even a receipt name.
To reduce the calculation time, the filter only start working after 3 character length.

#### Comments

You are abble to add, edit or remove comments on any expense.
Only 1 comment for expense is allowed.

#### Receipts

Now you can add receipts to an expense.
You can add only 1 by 1.
You can click on the receipt to open a gallery that you can navigate on.
You can delete a receipt if want to.

#### Sorting

You are also allowed to sort by date, value or merchant.
Once it's only a client side order, it will sort only among displayed items.

#### Language

You can change the main language on the buttons on Homepage. For now only English and Portuguese (Brazil) available.
