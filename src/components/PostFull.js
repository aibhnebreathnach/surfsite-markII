import React from 'react';
import { Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router';

import axios from 'axios';

class PostFull extends React.Component {

	state = {
		post : {},
		user : {},
		location : {}
	}

	async componentWillMount() {
		let self = this;
		let postId_int = parseInt(this.props.params.postId, 10); // parse decimal, base 10

		// wait for all post to be returned
		// then get user and location ids from post object
		await axios
				.get('http://localhost:3001/posts', { params: { id : postId_int } })
				.then(res => self.setState({ 
					post: res.data[0] 
				}))
				.catch(err => console.log(err));
		axios
			.get('http://localhost:3001/users?id=' + self.state.post.userId)
			.then(res => self.setState({ 
				user: res.data[0] 
			}))
			.catch(err => console.log(err));

		axios
			.get('http://localhost:3001/locations?id=' + self.state.post.locationId)
			.then(res => self.setState({ 
				location: res.data[0] 
			}))
			.catch(err => console.log(err));
	}

	render(){

		let user_profile_link = '/user/' + this.state.post.userId;
		let location_link = '/location/' + this.state.post.locationId;

		let title = this.state.post.title;
		let description = this.state.post.description;
		let user = this.state.user;
		let imageLink = this.state.post.imageLink;
		let location = this.state.location;
		return(
			<Container raised>
				<Image src={imageLink} centered fluid/>
				<h2> {title} </h2>
				<p> {description} </p>
				<h3> Photographer: <Link to={user_profile_link}> {user.name} </Link> </h3>
				<h3> Location: <Link to={location_link}> {location.town}, {location.country} </Link> </h3>
			</Container>
		)
	}
}

export default PostFull;