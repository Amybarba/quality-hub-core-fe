import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
require('dotenv').config();

// const checkLogin = () => {
//   if(localStorage.getItem('token')) {
//     return true
//   } else {
//     return false
//   }
// }

const getToken = () => {
	let token = localStorage.getItem('token');
	return token ? `Bearer ${token}` : '';
};

const cache = new InMemoryCache();

const client = new ApolloClient({
	uri: 'https://quality-hub-gateway-staging.herokuapp.com/',
	request: operation => {
		operation.setContext({
			headers: {
				Authorization: getToken(),
			},
		});
	},
	cache,
	resolvers: {},
});

cache.writeData({
	data: {
		isLoggedIn: !!localStorage.getItem('token'), // Awaiting Auth0 update
		isCoach: false, // Needs update
	},
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router>
			<App />
		</Router>
	</ApolloProvider>,
	document.getElementById('root'),
);
