import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { User } from '@/generated/prisma/client'
import { Authorization } from '@/shared/decorators/auth.decorator'
import { Authorized } from '@/shared/decorators/authorized.decorator'

import { MakePaymentModel } from './models/make-payment.model'
import { TransactionModel } from './models/transaction.model'
import { TransactionService } from './transaction.service'

@Resolver('Transaction')
export class TransactionResolver {
	public constructor(
		private readonly transactionService: TransactionService
	) {}

	@Authorization()
	@Query(() => [TransactionModel], { name: 'findMyTransactions' })
	public async findMyTransactions(@Authorized() user: User) {
		return this.transactionService.findMyTransactions(user)
	}
}
