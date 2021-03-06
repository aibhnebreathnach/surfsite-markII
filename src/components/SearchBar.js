import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import { Search, Card } from 'semantic-ui-react';


import axios from 'axios';


class SearchBar extends React.Component {
	state = {
		search : '',
		posts : []
	};

	handleSearchChange = (e) => {
		this.setState({ search : e.target.value });
	}

	handleResultClick(){
		this.setState({});
	}

	componentWillMount(){
		let self = this;

		axios
			.get('http://localhost:3000/api/posts')
			.then(res => self.setState({ posts : res.data}))
			.catch(err => console.log(err));
	}
	

	// render each 'result' in {results}
	renderResults = (post) => {

		// use postId param added in render; 'id' was overidden by Search.Result
		let post_full_link = '/posts/'+post._id;
		return (
				<Link to={post_full_link} onClick={this.handleResultClick}>
					<Card>
						<Card.Content>
							<Card.Header>
								{post.title}
							</Card.Header>
							<Card.Meta>
								{post.description}
							</Card.Meta>
						</Card.Content>
					</Card>
				</Link>
		);
	}


	render(){
		let value = this.state.search;

		let results = _.filter(this.state.posts, (post) => {
			return _.includes(post.title.toLowerCase(), this.state.search.toLowerCase());
		});

		return(
			<Search
				resultRenderer={this.renderResults}
				onResultSelect={this.handleResultSelect}
				onSearchChange={this.handleSearchChange}
				results={results}
				value={value}
			/>
		);
	}
}

export default SearchBar;