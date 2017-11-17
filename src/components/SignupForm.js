import React from 'react';
import {Form , Button, Icon} from 'semantic-ui-react';
import axios from 'axios';

class SignupForm extends React.Component {

	state= {
		name : '',
		imageLink : '',
		email : '',
		bio : ''
	}

	handleNameChange = (e) => { this.setState({name : e.target.value}); }
	handleImageLinkChange = (e) => { this.setState({imageLink : e.target.value}); }
	handleEmailChange = (e) => { this.setState({email : e.target.value}); }
	handleBioChange = (e) => { this.setState({bio : e.target.value}); }

	handleSubmit = (e) => {
		e.preventDefault();

		let name = this.state.name;
		let imageLink = this.state.imageLink;
		let email = this.state.email;
		let bio = this.state.bio;

		if (!name | !imageLink | !email) { return; }

		axios
			.post('http://localhost:3000/api/users', {
				name : name,
				imageLink : imageLink,
				email : email,
				bio : bio
			})
			.then(res => console.log(res))
			.catch(error => console.log(error));

		
		this.setState({
			name : '',
			imageLink : '',
			email : '',
			bio : ''
		});
	}

	render(){
		return(
			<Form>
				<Form.Group widths='equal'>
					<Form.Field>
						<label> Name </label>
						<input placeholder='Your full name'
							value={this.state.name}
							onChange={this.handleNameChange} />
					</Form.Field>

					<Form.Field>
						<label> Email </label>
						<input placeholder='Contact Email Address'
							value={this.state.email}
							onChange={this.handleEmailChange} />
					</Form.Field>
				</Form.Group>

				<Form.Field>
					<label> Profile Image </label>
					<input placeholder='Link to profile image'
						value={this.state.imageLink}
						onChange={this.handleImageLinkChange} />
				</Form.Field>


				<Form.Field>
					<label> Bio </label>
					<textarea placeholder='A description of you!'
						value={this.state.bio}
						onChange={this.handleBioChange} />
				</Form.Field>

				<Button animated onClick={this.handleSubmit}>
					<Button.Content visible>Signup</Button.Content>
					<Button.Content hidden>
						<Icon name='right arrow' />
					</Button.Content>
				</Button>

			</Form>
		)

	}
}

export default SignupForm;