# Vue Cognito App

This project demonstrates how to integrate AWS Cognito with a Vue 3 application for user authentication. The app includes custom registration and login components, and it is containerized using Docker for easy deployment and scalability.

## Description

The Vue Cognito App allows users to register and log in using AWS Cognito. It showcases how to manage authentication in a Vue 3 app using the AWS Cognito service, without relying on the default UI components provided by AWS. This project is set up with Docker to ensure that the environment is consistent across development and production setups.

## Prerequisites

Before you start, ensure you have the following installed:
- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) (typically included with Node.js)
- [Docker](https://www.docker.com/products/docker-desktop)
- An AWS account with access to AWS Cognito

## Project Setup

1. **Clone the Repository**
```
git clone https://your-repository-url-here.git
cd vue-cognito-app
```

2. **Install Dependencies and Configure AWS Cognito**
### Set Up Amplify CLI
- Install Amplify CLI:
```
npm install -g @aws-amplify/cli
```
- Configure Amplify CLI:
```
amplify configure
```
- Initialize Amplify in Your Project:
```
amplify init
```
- Add Authentication:
```
amplify add auth
```
- Deploy the Backend:
```
amplify push
```
- Install Amplify Libraries
```
npm install aws-amplify @aws-amplify/ui-vue
```

3. **Local Development**
- To run the application locally:
  ```
  npm run serve
  ```
- This command will start a local development server. Open http://localhost:8080 to view it in the browser. The app will automatically reload if you make changes to any of the source files.

## Building and Running with Docker

1. **Build the Docker Image**
```
docker build -t vue-cognito-app .
```

2. **Run the Docker Container**
docker run -it -p 8080:`YOUR_DOCKER_PORT_NUMBER` vue-cognito-app
- Now, your application is running inside a Docker container. Access it via http://localhost:8080 in any web browser.

## Additional Information

- **Testing**: Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).
- **Building for Production**: To build the app for production, run:
```
npm run build
```
- This builds the app for production to the `dist/` folder. It correctly bundles Vue in production mode and optimizes the build for the best performance.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
