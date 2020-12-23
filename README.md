[![CircleCI](https://circleci.com/gh/HolimaX/React.svg?style=svg&circle-token=1ad83382b085ffc81cd9c161999280cfc11453a3)](https://circleci.com/gh/HolimaX/React)
![Node CI](https://github.com/HolimaX/React/workflows/Node%20CI/badge.svg)

# Introduction

This project:

 - was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
 - was forked from original source to further be used as template for developments (like https://github.com/HolimaX/libhacontimig)
 - was ajusted to include integration with technologies (like Terraform, Ansible, Kubernetes), mentioned in github topics and can be seen in README.md files within folders. For more details, see ```https://github.com/HolimaX/React/blob/<branch>/src/README.md``` file as one of such inclusives. React-based Application is still kept isolated to ensure overall integrity and transaprency.

## Application Prerequistes

In order for this React app to be served w/o 'serve' tool, you need to install either Apache or NGNIX (but not both!) within non-control-plane (Master) node(s).

## Available Scripts

 - In the project ./.jenkinsci directory, you can use Jenkins(file) to execute complete deployment process to AWS. The step(s) assumes that the AWS AMI and AWS Launch Template is created and available un your AWS account.

 - In the project ./. (root) directrory, you can run ```terraform``` commands to individually create AWS resources. The step(s) assumes the ```terraform``` is installed and available in the PATH. For adjsutments, configuration files are stored in ./.terraformconfig .

 - In the project ./. (root) directrory, you can run ```ansible``` commands to individually create AWS resources. The step(s) assumes the ```ansible``` is installed and available in the PATH. For adjsutments, configuration files are stored in ./.ansibleconfig .

 - In the project ./. (root) directrory, you can run ```kubectl``` commands to individually create AWS resources. The step(s) assumes the ```kubectl``` is installed and available in the PATH. For adjsutments, configuration files are stored in ./.k8sconfig .

 - In the project ./. (root) directory, you can run (assuming ```nodejs```, ```npm``` and ```yarn``` is installed and available in the PATH):

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Integrations
The supported method is via C-style header SO libraries. See https://medium.com/learning-the-go-programming-language/calling-go-functions-from-other-languages-4c7d8bcc69bf for details. Note that only CircleCI is building the header files.

As of now, the pod configuration is adjusted in case there is incoming function call from integrated applications. This implementation is not aimed to push changes, but 'pull' instead.
