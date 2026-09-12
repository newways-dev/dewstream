import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
	schema: process.env.NEXT_PUBLIC_SERVER_URL,
	documents: ['./src/graphql/**/*.graphql'],
	generates: {
		'./src/graphql/generated/output.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo'
			],
			config: {
				scalars: {
					DateTime: 'string'
				}
			}
		}
	},
	config: {
		apolloReactHooksImportFrom: '@apollo/client/react',
		apolloReactCommonImportFrom: '@apollo/client/react'
	},
	ignoreNoDocuments: true
}

export default config
