import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CreatePage from './CreatePage';
import EditPage from './EditPage';
import ViewPage from './ViewPage';
import ListPages from './ListPages';


const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<div>
				<Link to='/'>My Articles</Link>
				<span> | </span> 
		    <Link to='/create'>Create Article</Link>

		    <hr />

				<Switch>
					<Route exact path='/' component={ListPages} />
					<Route path='/create' component={CreatePage} />
					<Route path='/edit/:id' component={EditPage} />
					<Route path='/view/:id' component={ViewPage} />
				</Switch>
			</div>
		</Router>
	</Provider>
);

export default Root;