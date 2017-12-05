import React from 'react';

import axios from 'axios';

import { Container } from 'semantic-ui-react';

import PostList from './components/PostList';


class LocationPostsPage extends React.Component{

	state = {
		location : {}, //location in question
		posts : [] // posts from that location
	};

	async componentWillMount(){
		let self = this;

		await axios
			.get('http://localhost:3000/api/locations/' + this.props.params.locationId)
			.then(res => self.setState({ location : res.data }))
			.catch(err => console.log(err));
		
		axios
			.get('http://localhost:3000/api/posts', {params : { locationId : this.props.params.locationId}})
			.then(res => self.setState({ posts : res.data }))
			.catch(err => console.log(err));
	}

	render(){
		let location = this.state.location;
		let posts = this.state.posts;

		return (
			<Container>
				<h2> Location: {location.town} </h2>
				<PostList posts={posts}/>
			</Container>
		);
	}
}

export default LocationPostsPage;