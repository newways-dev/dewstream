import {
	ConflictException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { PrismaService } from '@/core/prisma/prisma.service'
import { User } from '@/generated/prisma/client'

@Injectable()
export class TransactionService {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly configService: ConfigService
	) {}

	public async findMyTransactions(user: User) {
		const transactions = await this.prismaService.transaction.findMany({
			where: {
				userId: user.id
			}
		})

		return transactions
	}
}
