import React from 'react';
import {Form , Button, Icon} from 'semantic-ui-react';
import axios from 'axios';

class LocationForm extends React.Component{
	state = {
		town : '',
		country : ''
	};

	handleTownChange = (e) => { this.setState( {town : e.target.value} ); }
	handleCountryChange = (e) => { this.setState( {country : e.target.value} ); }

	handleSubmit = (e) => {
		let town = this.state.town;
		let country = this.state.country;

		if (!town | !country) { return; }

		axios
			.post('http://localhost:3001/locations', {
				town : town,
				country : country
			})
			.then(res => console.log(res))
			.catch(err => console.log(err));

		this.setState({
			town : '',
			country : ''
		});
	}
	
	render(){

		return(
			<Form>
				<Form.Field>
					<label> Town </label>
					<input placeholer=''
						value={this.state.town}
						onChange={this.handleTownChange}/> 
				</Form.Field>

				<Form.Field>
					<label> Country </label>
					<input placeholer=''
						value={this.state.country}
						onChange={this.handleCountryChange}/> 
				</Form.Field>

				<Button animated onClick={this.handleSubmit}>
					<Button.Content visible>Submit</Button.Content>
					<Button.Content hidden>
						<Icon name='right arrow' />
					</Button.Content>
				</Button>
			</Form>
		)
	}
}

export default LocationForm;