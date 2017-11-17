import React from 'react';
import axios from 'axios';

import { Container , Divider} from 'semantic-ui-react';

import PostList from './components/PostList';
import UserProfile from './components/UserProfile';

class UserPostsPage extends React.Component{

	state = {
		// posts made by this user
		posts : [],
		// this user object
		user : {},
		// all locations (for filter)
		locations : [],
		locationChoice : ''
	}

	componentWillMount() {
		let self = this; // for binding of 'this' in axios call

		// get posts and user
		axios.all([
			axios.get('http://localhost:3000/api/posts', { params: { userId : this.props.params.userId } }),
			axios.get('http://localhost:3000/api/users/' + this.props.params.userId),
			axios.get('http://localhost:3000/api/locations')
		  ])
		  .then(axios.spread((posts_res, user_res, loc_res) => {
			  self.setState({ 
				  posts : posts_res.data,
				  user : user_res.data[0],
				  locations : loc_res.data
				});
		  }))
		  .catch(error => console.log(error));
	}

	render(){
		return (
			<div>
				<Container raised>
					<UserProfile user={this.state.user}/>
				</Container>
				<Divider/>
				<PostList posts={this.state.posts} location={this.state.locations}/>
			</div>
		);
	}
}

export default UserPostsPage;