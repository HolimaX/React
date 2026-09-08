# Cloud Dashboard (CD) Foundation

[![CircleCI Status](https://circleci.com/gh/HolimaX/React.svg?style=svg)](https://circleci.com/gh/HolimaX/React)
[![Node CI](https://github.com/HolimaX/React/workflows/Node%20CI/badge.svg)](https://github.com/HolimaX/React)
[![Feature Maturity](https://img.shields.io/badge/Feature%20Maturity-Overview%20%26%20Matrix-blue.svg)](./docs/FEATURE_MATURITY.md)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-6.26.1-orange.svg)](https://reactrouter.com/)
[![Redux](https://img.shields.io/badge/Redux-5.0.1-purple.svg)](https://redux.js.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple.svg)](https://getbootstrap.com/)

## Feature Maturity & Integrator Guide

For a comprehensive status overview and comparison between the public **Cloud Dashboard (CD) Foundation** and the **Personalized Cloud Dashboard (PCD)** tier, please refer to:

👉 **[Feature Maturity Overview & CD/PCD Architectural Matrix](./docs/FEATURE_MATURITY.md)**

### Key Modernization Highlights
* **React 18 & Functional Architecture**: Full migration to React 18 hooks (`useState`, `useEffect`, `useCallback`, `useRef`) and `createRoot`.
* **React Router v6**: Modern declarative routing (`<Routes>`, `<Route element={<... />} />`) with route-level analytics.
* **Redux 5 & Redux-Thunk 3**: Streamlined state store with async circuit breaker retry loops (`isApiHalted`) protecting against external API flakiness.
* **Debounced Search**: 500ms debounced catalog search component with query sanitization.
* **Public Repository Sanitization**: Zero hardcoded secrets, proprietary endpoints, or private cloud references. All configuration is externalized via `.env`.
* **PlatformApps Preservation**: All `PLATFORMAPPS` telemetry and mock APIs native to HolimaX remain 100% intact and untouched.

## Introduction

This project:

- was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- serves as the public open-source foundation for Cloud Dashboard integrators and Personalized Cloud Dashboard (PCD) customers.
- was adjusted to include integration with cloud and container technologies (Terraform, Ansible, Kubernetes), documented within respective configuration directories.

React-based Application is kept isolated to ensure overall integrity and transparency.

## Application Prerequistes

You can establish environment in many ways. For example:

- In order for this React app to be started, the valid Okta connection is needed.

Configuration is set up during registration phase from connected Cloud Dashboard tools (like Android Phone app).

- In order for this React app to be served w/o 'serve' tool, you need to install either Apache or NGNIX (but not both!) within non-control-plane (Master) node.

Then, production build via ```npm build``` must be made and serving can be executed.

## Available Scripts

- In the project ./.jenkinsci directory, you can use Jenkins(file) to execute complete deployment process to AWS.
 The step(s) assumes that the AWS AMI and AWS Launch Template is created and available un your AWS account.

- In the project ./. (root) directrory, you can run ```terraform``` commands to individually create AWS resources.
 The step(s) assumes the ```terraform``` is installed and available in the PATH. For adjsutments, configuration files are stored in ./.terraformconfig .

- In the project ./. (root) directrory, you can run ```ansible``` commands to individually create AWS resources.
 The step(s) assumes the ```ansible``` is installed and available in the PATH. For adjsutments, configuration files are stored in ./.ansibleconfig .

- In the project ./. (root) directrory, you can run ```kubectl``` commands to individually create AWS resources.
 The step(s) assumes the ```kubectl``` is installed and available in the PATH. For adjsutments, configuration files are stored in ./.k8sconfig .

- In the project ./. (root) directory, you can run (assuming ```nodejs```, ```npm``` and ```yarn``` is installed and available in the PATH):

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3010](http://localhost:3010) to view it in the browser.
Ensure PORT 3001 is accessible to support additional features.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build:lib`

Compiles the reusable NPM package into `dist/` with dual format distributions:
- `dist/cjs/index.js` (CommonJS format for Node.js environments and legacy bundlers)
- `dist/esm/index.js` (ES Module format for modern bundlers and native ESM)

All JSX is pre-transpiled to standard `React.createElement` calls, ensuring downstream clients (such as Create React App applications that exclude `node_modules` from Babel transpilation) can import the package without encountering raw JSX syntax errors.

### `npm run build:all`

Sequentially runs `npm run build:lib` and `npm run build` to compile both the reusable NPM package and the standalone web application.

### `npm run generate:man` (or `npm run man`)

Compiles `README.md` into standard UNIX roff/troff manual documentation format at `man/beerbank.1` using `marked-man`.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.
This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them.
All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature.
However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Authentication

For compatible Products with designated type (like "Pro"/"Premium"):

- Release 1 supports OAuth 2.0 based authentication, as explained in [OAuth2](https://medium.appbase.io/how-to-implement-authentication-for-your-react-app-cf09eef3bb0b)

- Release 3 supports [ES6](https://www.w3schools.com/js/js_2016.asp) Class-based component loading via optionalDependencies and rendering check via ComponentDidMount() React Lifecycle methods with compatible SPAs.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [PWA](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [advanced](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Integrations

### External (NPM Package) Integration

`@HolimaX/beerbank` is configured as a dual-distribution NPM package that can be added to any client project's `package.json` at design time to provide base Cloud Dashboard (CD) functionality for Personalized Cloud Dashboard (PCD) enabled sites (such as `HealthDash_GHOrg/CloudDash-Frontend-ReactJS`).

#### Adding to Client `package.json`

Add the package under `dependencies` or `optionalDependencies`:

```json
{
  "dependencies": {
    "@HolimaX/beerbank": "^0.1.26"
  }
}
```

Or for local development:

```json
{
  "dependencies": {
    "@HolimaX/beerbank": "file:../HolimaX_GHOrg/React"
  }
}
```

#### Client Runtime & Design-Time Lifecycle Hook

Clients consume the CD foundation module via dynamic `import()` or static imports:

```javascript
// Dynamic import with design-time bundling and fallback
const baseModule = await import('@HolimaX/beerbank').catch(async () => {
  return await import(/* webpackIgnore: true */ '@HolimaX/beerbank').catch(() => null);
});

if (baseModule && typeof baseModule.myFunction === 'function') {
  const cdStatus = baseModule.myFunction();
  console.info("CD Foundation status:", cdStatus);
}
```

#### Exported Module Inventory

The package exports the following core primitives:
- `myFunction(options)`: Base lifecycle initializer returning status, version, and capability flags.
- `componentIdentityDescriptionAH(version, name)`: Component descriptor helper.
- `beerActions`: Redux action creators (`fetchBeers`, `fetchBeersWithRetry`, `searchBeers`, `handleFavourite`, `fetchPlatformApps`, `fetchPlatformAppsWithRetry`, `searchPlatformapps`, `displayPlatformapp`).
- `beerActionTypes`: Complete enumeration of action type constants.
- `beerReducer`, `rootReducer`, `store`: Configured Redux state stores and reducers.
- `Home`, `Dashboard`, `Favourites`, `Navbar`, `Search`, `Beer`, `Beers`, `BeerDetails`: Pre-built presentation components.
- `appConfig`: Sanitized identity provider and telemetry configuration.

### CLI & Node REPL Support

To inspect the package interactively in a Node shell or REPL:

```bash
node beerbank
```

Or programmatically in Node.js / CommonJS scripts:

```javascript
const beerbank = require('@HolimaX/beerbank');
console.log(beerbank.myFunction());
```

### Internal (REST API based) integrations

You can use internal REST API based logic for incoming calls handling for Infrastructure integrated applications.
The logic consists of Auto-Synchronization, Auto-Notification and Auto-Configuration management for Pro ("Premium") modules.

Also, the supported method for advanced integration is via C-style header SO libraries.
See [Integration via GoLang](https://medium.com/learning-the-go-programming-language/calling-go-functions-from-other-languages-4c7d8bcc69bf) for details.

**Note: Only CircleCI is building the header files.**

As of now, the infrastructure automation (kubernetes pod) configuration is adjusted in case there is incoming function call from integrated applications.
This implementation is not aimed to ```'push'``` changes, but ```'pull'``` instead.
