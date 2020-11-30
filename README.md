# Cinema Service FRONTEND

![Lint](https://github.com/aleksandra-midor/cinema-service-frontend/workflows/Lint/badge.svg)
![Test](https://github.com/aleksandra-midor/cinema-service-frontend/workflows/Test/badge.svg)
![Build](https://github.com/aleksandra-midor/cinema-service-frontend/workflows/Build/badge.svg)

[![Netlify Status](https://api.netlify.com/api/v1/badges/050bbac1-5259-40d3-8d18-42b1f58fbc84/deploy-status)](https://app.netlify.com/sites/cinema-paradiso/deploys)

## Main features:

- cinema network web page with info about movies and shows
- ticket booking service with payment and email confirmation
- multi language support

## Live Version

[live version link](/)

## Github repository

[aleksandra-midor/cinema-service-frontend](https://github.com/aleksandra-midor/cinema-service-frontend)

## Technologies

### Frontend

- react with hooks based on CRA template
- sass
- i18n
- eslint
- stripe (payment)
- cloudinary (images hosting)
- jest, testing-library

### Backend

- node JS
- express
- mongo DB
- stripe (payment)
- mailJet
- eslint
- mocha, chai, supertest

### CI and Deployment

- Github actions
- netlify (frontend)
- heroku (backend)

## Local environment setup

### Requirements

- cinema service [backend repository](https://github.com/aleksandra-midor/cinema-service-backend) downloaded, installed, and running
- mongo database (in backend)
- [mailjet](https://mailjet.com) (for backend)
- [stripe.com](https://stripe.com/en-se) dev account and its secret api key

### Setup

1. clone the repository
2. install dependencies
   ```
   npm install
   ```
3. create `.env.local` file in root directory

   ```
   REACT_APP_BASE_URL=<backend url>
   REACT_APP_STRIPE_KEY=<stripe key>
   ```

   and replace

   - `<backend-url>` with url to your cinema serive backend, for example 'http://localhost:5001'

   - `<stripe-key>` with a secret key from stripe

4. run `npm start` to start developing

## Avaliable scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\


### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Booking tickets and payment
You can ubook any tickets you want and pay by a mockup card without any worries. This is just an exercise so either cinema nor payment are real.

### mockup card details:
- card number: 4242 4242 4242 4242
- card valid till: any date in the futrue

### email
Feel free to enter your email if you want to check email functionality.


## About author:

Aleksandra Midor

website: [aleksandramidor.com](http://aleksandramidor.com/)

mail: [ola_midor@outlook.com](mailto:ola_midor@outlook.com)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Icons attributes

Icons made by <a href="https://www.flaticon.com/authors/fjstudio" title="fjstudio">fjstudio</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>