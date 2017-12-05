import React from 'react';
import { Link } from 'react-router';
import { Card, Image, Container} from 'semantic-ui-react';

import axios from 'axios';

class PostCard extends React.Component{
	state = {
		user : {},
		location : {}
	};

	componentWillMount(){
		let self = this; // for binding of 'this' in axios call

		// get posts and user
		axios.all([
			axios.get('http://localhost:3000/api/users/' + this.props.post.userId),
			axios.get('http://localhost:3000/api/locations/' + this.props.post.locationId)
		  ])
		  .then(axios.spread(function (user_res, loc_res) {
			  self.setState({ 
				  user : user_res.data,
				  location : loc_res.data
				});
		  }))
		  .catch(error => console.log(error));
	}

	render(){
		// dynamically get links?
		let full_post_link = '/posts/' + this.props.post._id;
		let user_profile_link = '/user/' + this.state.user._id;
		let location_link = '/location/' + this.state.location._id;

		let title = this.props.post.title;
		let description = this.props.post.description;
		let user = this.state.user;
		let imageLink = this.props.post.imageLink;
		let location = this.state.location;
		
		return (
			<Card raised>
				<Link to={full_post_link}>
					<Image src={imageLink}/>
				</Link>
				<Card.Content>
					<Card.Header>
						{title}
					</Card.Header>
					<Card.Meta>
						<Link to={user_profile_link}>{user.name}</Link>
						in <Link to={location_link}>{location.town}, {location.country} </Link>
					</Card.Meta>
					<Card.Description>
						{description}
					</Card.Description>
				</Card.Content>
			</Card>
		)
	}
}

export default PostCard;