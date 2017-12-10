import React from 'react';
import { Container, Card, Form , Button, Icon, Divider  } from 'semantic-ui-react';
import { Link } from 'react-router';
import _ from 'lodash';
import axios from 'axios';

class Comments extends React.Component {

	state = {
		content : '',
		userId : '',
		users : []
	}


	componentDidMount(){
		var self = this;
		axios
			.get('http://localhost:3000/api/users/')
			.then(res => self.setState({ 
				users: res.data
			}))
			.catch(err => console.log(err));
	}

	handleContentChange = (e) => { this.setState({content : e.target.value}); }
	handleUserIdChange = (e) => { this.setState({userId : e.target.value}); }

	handleSubmit = (e) => {
		e.preventDefault();

		let content = this.state.content;
		let user_id = this.state.userId;

		if (!content | !user_id) { return; }

		axios
			.patch('http://localhost:3000/api/posts/' + this.props.post._id, {
				content : content,
				userId : user_id
			})
			.then(res => console.log(res))
			.catch(error => console.log(error));
		
		this.setState({
			content : '',
			userId : '',
		});

	}

	render(){
		// set user options for dropdown menu
		let userOptions = _.map(this.state.users, (user) => {
			return <option key={user._id} value={user._id}>{user.name}</option>
		});
		let comments = _.map(this.props.post.comments, (comment) => {
			let commenter = _.find(this.state.users, (user) => {
				return user._id == comment.userId;
			});

			let commenter_profile_link = 'user/'+commenter._id;
			return( 
				<Card raised>
					<Card.Header>
						{comment.content}
					</Card.Header>
					<Card.Description>
						<Link to={commenter_profile_link}>
							{commenter.name}
						</Link>
					</Card.Description>
				</Card>
			)
		});
		comments.reverse();
		return (
			<Container>
				<Card.Group itemsPerRow={4}>
					{comments}
				</Card.Group>
			<Divider/>
				<Form>
					<Form.Group widths='equal'>
						<Form.Field>
							<label>Comment</label>
							<input placeholder='Comment content goes here' 
								value={this.state.content}
								onChange={this.handleContentChange}/>
						</Form.Field>
						<Form.Field>
							<label> Name | <Link to='/signup'> Your name not here? Add it to the database! </Link></label>
							<select value={this.state.userId}
									onChange={this.handleUserIdChange}>
								{userOptions}
							</select>
						</Form.Field>
					</Form.Group>

					<Button animated onClick={this.handleSubmit}>
						<Button.Content visible>Submit</Button.Content>
						<Button.Content hidden>
							<Icon name='right arrow' />
						</Button.Content>
					</Button>

				</Form>
			</Container>
		);

	}
}

export default Comments;