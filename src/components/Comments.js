import React from 'react';
import { Container, Card } from 'semantic-ui-react';
import { Link } from 'react-router';
import _ from 'lodash';

class Comments extends React.Component {
	
	render(){
		let comments = _.map(this.props.post.comments, (comment => {
			return( 
				<Card raised>
					<Card.Header>
						{comment.content}
					</Card.Header>
					<Card.Description>
						{comment.userId}
					</Card.Description>
				</Card>
			)
		}));
		comments.reverse();
		return (
			<Container>
				{comments}
			</Container>
		);

	}
}

export default Comments;