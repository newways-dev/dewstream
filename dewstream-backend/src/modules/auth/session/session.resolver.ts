import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'

import { Authorization } from '@/shared/decorators/auth.decorator'
import { UserAgent } from '@/shared/decorators/user-agent.decorator'
import { GqlContext } from '@/shared/types/gql-context.types'

import { AuthModel } from '../account/models/auth.model'

import { LoginInput } from './inputs/login.input'
import { SessionService } from './session.service'

@Resolver('Session')
export class SessionResolver {
	constructor(private readonly sessionService: SessionService) {}

	@Mutation(() => AuthModel, { name: 'loginUser' })
	public async login(
		@Context() { req }: GqlContext,
		@Args('data') input: LoginInput,
		@UserAgent() userAgent: string
	) {
		return this.sessionService.login(req, input, userAgent)
	}

	@Authorization()
	@Mutation(() => Boolean, { name: 'logoutUser' })
	public async logout(@Context() { req }: GqlContext) {
		return this.sessionService.logout(req)
	}
}
