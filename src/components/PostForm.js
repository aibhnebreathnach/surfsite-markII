import React from 'react';
import { Link } from 'react-router';
import {Form , Button, Icon } from 'semantic-ui-react';
import axios from 'axios';


class PostForm extends React.Component {
	state = {
		title : '',
		imageLink: '',
		description : '',
		location_id : '',
		user_id : '',

		users : [],
		locations : []
	};

	componentDidMount(){
		let self = this;

		axios.all([
			axios.get('http://localhost:3000/api/users'),
			axios.get('http://localhost:3000/api/locations')
		])
		.then(axios.spread((users_res, loc_res) => {
			self.setState({
				users : users_res.data,
				user_id : users_res.data[0]._id,
				locations : loc_res.data,
				location_id : loc_res.data[0]._id
			});
		}))
		.catch(error => console.log(error));
	}

	handleTitleChange = (e) => { this.setState({title : e.target.value}); }
	handleLinkChange = (e) => { this.setState({imageLink : e.target.value}); }
	handleDescriptionChange = (e) => { this.setState({description : e.target.value}); }
	handleLocationChange = (e) => { this.setState({location_id : e.target.value}); }
	handleUserChange = (e) => { this.setState({user_id : e.target.value}); }

	handlePost = (e) => {
		e.preventDefault();
		
		let title = this.state.title;
		let imageLink = this.state.imageLink;
		let description = this.state.description;
		
		let location_id = this.state.location_id;
		let user_id = this.state.user_id;

		if (!title | !imageLink | !description | !location_id| !user_id) { return; }

		axios
			.post('http://localhost:3000/api/posts', {
				title : title,
				imageLink : imageLink,
				description : description,
				locationId : location_id,
				userId : user_id
			})
			.then(res => console.log(res))
			.catch(error => console.log(error));


		
		this.setState({
			title : '',
			imageLink: '',
			description : '',

			location_id : '',
			user_id : '',
		});
	}

	render() {

		// set location options for dropdown menu
		let locationOptions = this.state.locations.map( (location) => {
			return <option key={location._id} value={location._id}>{location.town}</option>
		});

		// set user options for dropdown menu
		let userOptions = this.state.users.map( (user) => {
			return <option key={user._id} value={user._id}>{user.name}</option>
		});
	  return (
			<Form>
					<Form.Group widths='equal'>
						<Form.Field>
							<label>Post Title</label>
							<input placeholder='Title of your post' 
								value={this.state.title}
								onChange={this.handleTitleChange}/>
						</Form.Field>

						<Form.Field>
							<label>Image Link</label>
							<input placeholder='Link to post image' 
								value={this.state.imageLink}
								onChange={this.handleLinkChange}/>
						</Form.Field>
					</Form.Group>

					<Form.Field>
						<label>Description</label>
						<textarea placeholder='A description of the post' 
							value={this.state.description}
							onChange={this.handleDescriptionChange}/>
					</Form.Field>

					<Form.Group widths='equal'>
						<Form.Field>
							<label> Location | <Link to='/addlocation'> Your location not here? Add it to the database! </Link></label>
							<select value={this.state.location_id} 
									onChange={this.handleLocationChange}>
								{locationOptions}
							</select>
						</Form.Field>

						<Form.Field>
							<label> Author | <Link to='/signup'> Your name not here? Add it to the database! </Link></label>
							<select value={this.state.user_id}
									onChange={this.handleUserChange}>
								{userOptions}
							</select>
						</Form.Field>
					</Form.Group>

					<Button animated onClick={this.handlePost}>
						<Button.Content visible>Submit</Button.Content>
						<Button.Content hidden>
							<Icon name='right arrow' />
						</Button.Content>
					</Button>

			</Form>
		);
	}
}

export default PostForm;