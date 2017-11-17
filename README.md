# Assignment 1 - ReactJS app.

Name: Aibhne Breathnach

## Overview.
Surfsite is a website where users make short blog posts about surfing. Posts
are made using an image with a short description of the post and the location. Posts are accompanied
by a link to the user's profile and location.<br>
Anyone can view all posts made by a user and all posts made about a certain location.
Also anyone can signup and make posts of their own, each user that signs up will have a profile page
with each of their posts and a small bio/email etc. <br>
They can also add locations to the database if their location is not featured!<br>
You can also search for any post using the search bar.

 
 + User signup and profile.
 + User post portfolio.
 + Location post portfolio.
 + Add new locations.
 + Search for posts.

## Installation requirements.
+ [Node js](https://nodejs.org/en/)
+ All below provided in package.json installed using npm install
+ [ReactJS v15.6.1](https://reactjs.org/)
+ [create-react-app tool](https://github.com/facebookincubator/create-react-app)
+ [Semantic-UI-React](https://react.semantic-ui.com)
+ [axios](https://github.com/axios/axios)
+ [json-server](https://github.com/typicode/json-server)

To clone and run app:
```
$ git clone https://github.com/aibhnebreathnach/surfsite.git
$ cd surfsite
$ npm install
```
Then in a seperate terminal:
```
$ cd server
$ json-server --watch db.json --port 3001
```
Leave the above running and then in root directory:
```
$ npm start
```

## Data Model Design.

Sample data taken from ```db.json```

Example of single post from the array of posts in test data <br>
locationId - reference to an existing location object by id - location of the post. <br>
userId - reference to an existing user object by id - user who made the post <br>
![][posts_json]

Example of a single location from the array of locations in test data <br>
![][locations_json]

Example of a single user from the array of users in test data <br>
![][users_json]

## App Component Design.

 . . . A diagram showing the app's hierarchical component design (see example below) . . . .  

![][design]

## UI Design.

#### Home Page View: <br> 
+ Landing page for the app.
+ Each post card image is a link to the full post view.
+ Name and location in card text are links to all user and location posts.
+ Use search bar to search for posts.
![][home_view]

#### Full Post Page View - View a post in more detail <br>
+ User and Location texts are links to all user and location posts.
![][full_post_view]

#### User Signup Page View - Signup a new user <br>
![][signup_view]

#### Make Post Page View - Make a new post for the app <br>
![][post_view]

#### Add Location Page View - Add a new location for posts <br>
![][addlocation_view]

#### Search View - Search for a post, each result is a link to full post view <br>
![][search_view]

## Routing.

+ / - homepage; see all posts
+ /posts/:postId - full post page of a particular post (:postId)
+ /post - make a new post
+ /user/:userId - see particular user profile (:userId)
+ /location/:locationId - see all posts for a particular location (:locationId)
+ /addlocation - add a location to the database
+ /signup - user signup page

## Extra features.
+ JSON-server : A simple json server was developed for the app, holding and persisting all post, location and user data.
+ Axios : Axios, a promise based HTTP client, was used to access the json server.
+ Semantic-UI-React: A React integration of Semantic UI, a HTML/CSS styling framework.

## Independent learning.
+ axios - promise based HTTP client
+ ES6 async await


[posts_json]: ./images/posts_json.png
[locations_json]: ./images/locations_json.png
[users_json]: ./images/users_json.png

[design]: ./images/design.png

[home_view]: ./images/home_view.png
[full_post_view]: ./images/full_post_view.png
[signup_view]: ./images/signup_view.png
[post_view]: ./images/post_view.png
[addlocation_view]: ./images/addlocation_view.png
[search_view]: ./images/search_view.png