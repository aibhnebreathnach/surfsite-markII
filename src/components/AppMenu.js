import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';

import SearchBar from './SearchBar';

class AppMenu extends React.Component{
	
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render(){

		return (
			<Menu inverted>
				<Menu.Menu>
					<Link to='/'>
						<Menu.Item name='home' onClick={this.handleItemClick}>
							home
						</Menu.Item>
					</Link>

					<Link to='/post'>
						<Menu.Item name='post' onClick={this.handleItemClick}>
							post
						</Menu.Item>
					</Link>

					<Link to='/signup'>
						<Menu.Item name='signup' onClick={this.handleItemClick}>
							user signup
						</Menu.Item>
					</Link>

					<Link to='/addlocation'>
						<Menu.Item name='addlocation' onClick={this.handleItemClick}>
							add location
						</Menu.Item>
					</Link>
				</Menu.Menu>

				<Menu.Menu position='right'>
					<Menu.Item>
						<SearchBar/>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		)
	}
};

export default AppMenu;