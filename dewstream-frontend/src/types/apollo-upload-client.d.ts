declare module 'apollo-upload-client' {
	import { ApolloLink } from '@apollo/client'

	interface UploadLinkOptions {
		uri?: string
		credentials?: string
		headers?: Record<string, string>
		[key: string]: unknown
	}

	export function createUploadLink(options?: UploadLinkOptions): ApolloLink
}
