import { Args, Mutation, registerEnumType, Resolver } from '@nestjs/graphql'
import { IngressInput } from 'livekit-server-sdk'

import { User } from '@/generated/prisma/client'
import { Authorization } from '@/shared/decorators/auth.decorator'
import { Authorized } from '@/shared/decorators/authorized.decorator'

import { IngressService } from './ingress.service'

registerEnumType(IngressInput, {
	name: 'IngressInput'
})

@Resolver('Ingress')
export class IngressResolver {
	public constructor(private readonly ingressService: IngressService) {}

	@Authorization()
	@Mutation(() => Boolean, { name: 'createIngress' })
	public async create(
		@Authorized() user: User,
		@Args('ingressType', { type: () => IngressInput })
		ingressType: IngressInput
	) {
		return this.ingressService.create(user, ingressType)
	}
}
