# Assignment 2 - E2E app.

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

## Server-side.

#### Web API interface.

##### Post
+ GET /api/posts/ - Get all posts
+ GET /api/posts?userId=[user id] & locationId=[location id] - get posts with fields matching query strings, any number of the above queries can be included.
+ GET /api/posts/:id - Get a specific post
+ POST /api/posts/ - Create a new post
+ PUT /api/posts/:id - Update an existing post
+ DELETE /api/posts/:id - Delete a post
+ PATCH /api/posts/:id - Add a comment to a post

##### User
+ GET /api/users/ - Get all users
+ GET /api/users/:id - Get a specific user
+ POST /api/users/ - Create a new user
+ PUT /api/users/:id - Update an existing user
+ DELETE /api/users/:id - Delete a user

##### Location
+ GET /api/locations/ - Get all locations
+ GET /api/locations/:id - Get a specific location
+ POST /api/locations/ - Create a new location
+ PUT /api/locations/:id - Update an existing location
+ DELETE /api/locations/:id - Delete a location

### Data Model Design.

##### Post and Comment Schema
+ User and Location IDs are references to User and Location objects.
+ User and Location IDs not 'required' for seeding purposes.
+ Contains embedded Comment schema - a comment by a user on a post.
![][post_schema]

##### Location Schema
![][location_schema]

##### User Schema
![][user_schema]

## Client-side.

#### UI Design.
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

#### Routing.
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

-------------------------------------

## Extra features
+ Full CRUD on users, locations, posts.
+ Query String support - Post by userId and/or locationId. 
+ Embedded Schema - Comments on Post.

## Independent learning.


[post_schema]: ./README_images/Post_schema.png
[location_schema]: ./README_images/Location_schema.png
[user_schema]: ./README_images/User_schema.png

[component_design]: ./README_images/component_design.png

[home_view]: ./README_images/home_view.png
[full_post_view]: ./README_images/full_post_view.png
[signup_view]: ./README_images/signup_view.png
[post_view]: ./README_images/post_view.png
[addlocation_view]: ./README_images/addlocation_view.png
[search_view]: ./README_images/search_view.png
[comment_view]: ./README_images/comment_view.png