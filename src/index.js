
// React imports
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

// Semantic UI imports
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

// Component Imports
import AppMenu from './components/AppMenu';
import Home from './Home';
import PostFull from './components/PostFull';
import PostForm from './components/PostForm';
import UserPostsPage from './UserPostsPage';
import LocationPostsPage from './LocationPostsPage';
import SignupForm from './components/SignupForm';
import LocationForm from './components/LocationForm';

class App extends React.Component {
	render() {
	  return (
			<Container>
				<AppMenu/>
				{this.props.children}
			</Container>
	  )
	}
}

ReactDOM.render(
	(
		<Router history={browserHistory} >
		  <Route path='/' component={App}>
				<IndexRoute component={Home}/>
					<Route path='posts/:postId' component={PostFull} />
					<Route path='post' component={PostForm} />
					<Route path='user/:userId' component={UserPostsPage} />
					<Route path='location/:locationId' component={LocationPostsPage} />
					<Route path='addlocation' component={LocationForm} />
					<Route path='signup' component={SignupForm} />
		  </Route>
		</Router>
	), 
	document.getElementById('root'));