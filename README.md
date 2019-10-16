# Module Project: Deploying Web Apps - Portfolio Piece

In this module you will use what you've learned about deploying a web application, and deploy one of the apps you've built so that you can add it to your portfolio page

## Instructions

Read these instructions carefully. Understand exactly what is expected _before_ starting this project.

## Project Set Up

Think about which project you are most proud of up to this point that you have built from the ground up. For this project, you will work on deploying that project using ZEIT, and prepare it to be added to your portfolio site. 

Follow these steps for completing your project.

- [ ] Send your team lead the link to your web app 
- [ ] Show them that it has been added to your portfolio
- [ ] If you don't have a portfolio, use this project time to create a portfolio, and deploy it with ZEIT ([here](https://github.com/LambdaSchool/portfolio-website) is a guide for this)
- [ ] Once you have finished, your TL will count the project as completed

# Project - Portfolio Piece

## Directions

After you have figured out which project you want to deploy, sign up for an account with ZEIT and start the deployment process as outlined in training kit for this module. Once the project is deployed, you will add it to your porfolio site. Finally, work on updating this project so that it is polished and bug free! Good luck!

## Stretch Problems

Do not attempt stretch problems until MVP has been reached and a final commit has been made.

Work on deploying a second, or even third portfolio project. If you have extra time, go back and update the styles, add features, fix bugs, etc, on all the sites so that they will look good for potential employers.

# Auth Friends

Topics:

* React Router
* Protected Routes
* `axios` package
* AJAX
* Promises
* Authentication tokens

## Project Description

* There is an API built that has authentication built into it. The API holds a list of friends and lets you add, edit, or remove friends from that list. 
* All of the API endpoints (except the login endpoint) are considered "protected", meaning you have to make the request with an authentication token in the header or the API will send back a `401` error. 
* Take your examples from the guided project and use them to build a more sophisticated application. Have fun!
* Once your server is up and running, the URL you'll be able to hit from within your app is `http://localhost:5000`. You will however need an authentication header on all the calls except the login call.
* Take a look at the endpoints that our API has to offer in `server.js`.

  * **[POST]** * to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda School', password: 'i<3Lambd4' }`
  * **[GET]** to `/api/friends`: returns the list of friends.
  * **[GET]** to `/api/friends/123`: returns the friend with the id passed as part of the URL (123 in example).
  * **[POST]** to `/api/friends`: creates a friend and return the new list of friends. Pass the friend as the `body` of the request (the second argument passed to `axios.post`).
  * **[PUT]** to `/api/friends/:id`: updates the friend using the `id` passed as part of the URL. Send the an object with the updated information as the `body` of the request (the second argument passed to `axios.put`).
  * **[DELETE]** to `/api/friends/123`: removes the friend using the `id` passed as part of the URL (123 in example).

## Initialize Project

* Run `yarn` or `npm i` inside the root directory of this project to install dependencies.
* Run `yarn start` or `npm start` to start the API server.
* Run `create-react-app friends` in a separate terminal window in the root directory of the project to create your starter application.
* `cd` into the _friends_ folder and type `yarn add axios react-router-dom` which will install the needed dependencies.

## Build the App!
* Add a route for a login page and build out a simple login form with username and password inputs and a submit button (design this however you would like).
* The login function should save the returned token to localStorage. You can setup `isLoading` state in your Login component, and show a spinner on your form or in your button while the login request is happening.
* When the request returns, save the token to `localStorage`, then use the history object in your Login component to navigate your user to your FriendsList route
* Create a `<PrivateRoute />` component to protect your other routes. It should check localStorage for a token, and redirect the user to your login route if there is not a token.
* Create a protected route for your friends list. Remember, if the user isn't logged in, navigating to this protected route will redirect them to the login page.
* In your FriendsList component, rendered with `<ProtectedRoute />`, you will create a list of your friends that you get from the API.

**Adding New Friends**
* Create a form to collects data for a new friend.
* Make a POST request to add a friend to the database
* Each `friend` item that is in the `friends` array should have the following format:

```js
{
  id: 1
  name: 'Joe',
  age: 24,
  email: 'joe@lambdaschool.com',
}
```

* If you'd like, you can create multiple "view" components for your routes. You could have a component who's sole purpose is to render the login form; one for a form for updating a user; another component who's sole purpose is for creating users; and then another component who's sole purpose is to delete a user.
* It really is up to you how you build this project. I suggest writing down the flow you want to follow, and then writing down each individual piece you need for each step in the flow so that this process doesn't feel as overwhelming.

## Stretch Problem

* In the requirements for this project, we implemented a login POST operation, a GET operation, and a "add friend" POST operation. Add two more functions, one for making a PUT request, and the other for making a DELETE request.
* Style the friends list and the input field and make everything look nice.
* Expand the number of properties that you put on each friend object. Feel free to remove the dummy data on the server or modify it in any way.
