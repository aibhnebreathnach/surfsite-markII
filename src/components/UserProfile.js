import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

class UserProfile extends React.Component {

	render(){
		let name = this.props.user.name;
		let imageLink = this.props.user.imageLink;
		let email = this.props.user.email;
		let bio = this.props.user.bio;
		return (
			<Grid columns={2}>
				<Grid.Column>
					<Image src={imageLink} size='large' />
				</Grid.Column>

				<Grid.Column>
					<Card fluid>
						<Card.Content header={name} />
						<Card.Content description={bio} />
						<Card.Content extra>
							{email}
						</Card.Content>
					</Card>
				</Grid.Column>
			</Grid>
		)
	}
}

export default UserProfile;