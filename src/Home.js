import React, { Component } from 'react';
import { Link } from 'react-router';

import { Container, Image, Divider } from 'semantic-ui-react';

import PostList from './components/PostList';
import axios from 'axios';

class Home extends Component {

	state = {
		posts : []
	}

	componentDidMount() {
		axios
		  .get('http://localhost:3001/posts')
		  .then(res => this.setState({ posts: res.data }))
		  .catch(err => console.log(err))
	}

	render() {
		return (
			<Container>
				<Link to='/'> 
					<Image centered src='https://assets.huckberry.com/uploads/post/image/1515/hero_2340_header_option_mollusk.jpg'/>
				</Link>
				<Divider/>
				<PostList posts = {this.state.posts} />
			</Container>
		);
	}
}


export default Home;
