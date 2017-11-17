import React from 'react';
import { Card } from 'semantic-ui-react';
import PostCard from '../components/PostCard';

class PostList extends React.Component {
	
	render() {
		let posts = this.props.posts.map( (post) => {
			return <PostCard post={post} />
		});
		posts.reverse(); // display in reverse order
	  return (
		<Card.Group itemsPerRow={4}>
			{posts}
		</Card.Group>
		);
	}
}

export default PostList;