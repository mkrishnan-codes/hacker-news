Project is a hacker news clone - [https://news.ycombinator.com/](https://news.ycombinator.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Used server side rendering in a node server.

 
App is deployed to heroku. [Live view here](https://hacker-news-gi.herokuapp.com/)


*Note - When an app on Heroku has only one web dyno and that dyno doesn't receive any traffic in 1 hour, the dyno goes to sleep, as a result initial wakeup of app will be [little slow](https://blog.heroku.com/app_sleeping_on_heroku)*


[View deployments](https://github.com/mkrishnan-codes/hacker-news/deployments)

  **Tech stack**
 
 

 - Nodejs

 

 - Reactjs

 

 - Redux

 

 - [Redux toolkit](https://redux-toolkit.js.org/) - To reduce complexity
   in setting up store and reduce boilerplates
 - Material UI
 - Unit tests -  Jest
 - CI - Heroku pipeline

## Available Scripts

  

In the project directory, you can run:



### `yarn test`

  Launches the test runner in the interactive watch mode.<br  />
  
###  `yarn dev`
Runs the app in the development mode.<br  />
Open [http://localhost:7777](http://localhost:7777) to view it in the browser.
  


### `yarn build`

  

Builds the app for production to the `build` folder.<br  />

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.<br  />

