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
+ [MongoDB](https://www.mongodb.com/)
<br> All below provided in package.json installed using ```npm install```
+ [ReactJS v15.6.1](https://reactjs.org/)
+ [Express](https://github.com/expressjs/express)
+ [Mongoose](http://mongoosejs.com/)
+ [create-react-app tool](https://github.com/facebookincubator/create-react-app)
+ [Semantic-UI-React](https://react.semantic-ui.com)
+ [axios](https://github.com/axios/axios)

To clone and run app:
```
$ git clone https://github.com/aibhnebreathnach/surfsite-markII.git
$ cd surfsite-markII
$ npm install
```

Then setup mongoDB
```
$ mkdir surf-db
$ mongod --dbpath ./surf-db
```
Leave that running, then in a seperate terminal:
```
$ cd seed
$ ./seed.sh
```
Check it has seeded using mongo console
```
$ mongo
> use surf-db
> show collections

  locations
  posts
  users
```
Then start the server, in ```server/```
```
$ node bin/www
```
Leave server running and then to run app:
```
$ cd src
$ npm start
```

## Data Model Design.

### Post and Comment Schema
+ User and Location IDs are references to User and Location objects.
+ User and Location IDs not 'required' for seeding purposes.
+ Contains embedded Comment schema - a comment by a user on a post.
![][post_schema]

### Location Schema
![][location_schema]

### User Schema
![][user_schema]

## App Component Design.
![][component_design]

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

#### Comment View - Create a comment, comment contains link to users profile
![][comment_view]

## Routing.

+ / - homepage; see all posts
+ /posts/:postId - full post page of a particular post (:postId)
+ ##### /posts - support for query string:
  + /posts?userId={user ID}
  + /posts?locationId={location ID}

+ /post - make a new post
+ /user/:userId - see particular user profile (:userId)
+ /location/:locationId - see all posts for a particular location (:locationId)
+ /addlocation - add a location to the database
+ /signup - user signup page

## Extra features.
+ Full CRUD on users, locations, posts.
+ Embedded Schema - Comments on Post.
+ Axios : Axios, a promise based HTTP client.
+ Semantic-UI-React: A React integration of Semantic UI, a HTML/CSS styling framework.

## Independent learning.
+ axios - promise based HTTP client
+ Async / Await


[post_schema]: ./images/Post_schema.png
[location_schema]: ./images/Location_schema.png
[user_schema]: ./images/User_schema.png

[component_design]: ./images/component_design.png

[home_view]: ./images/home_view.png
[full_post_view]: ./images/full_post_view.png
[signup_view]: ./images/signup_view.png
[post_view]: ./images/post_view.png
[addlocation_view]: ./images/addlocation_view.png
[search_view]: ./images/search_view.png
[comment_view]: ./images/comment_view.png