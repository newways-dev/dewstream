import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import UploadHttpLink from 'apollo-upload-client/UploadHttpLink.mjs'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'

import { SERVER_URL, WEBSOCKET_URL } from './constants/url.constants'

const httpLink = new UploadHttpLink({
	uri: SERVER_URL,
	credentials: 'include',
	headers: {
		'apollo-require-preflight': 'true'
	}
})

const wsLink = new GraphQLWsLink(
	createClient({
		url: WEBSOCKET_URL
	})
)

const splitLink = ApolloLink.split(
	operation => {
		const definition = getMainDefinition(operation.query)

		return (
			definition.kind === 'OperationDefinition' &&
			definition.operation === 'subscription'
		)
	},
	wsLink,
	httpLink
)

export const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache()
})