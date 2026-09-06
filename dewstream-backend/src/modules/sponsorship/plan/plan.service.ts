import {
	ForbiddenException,
	Injectable,
	NotFoundException
} from '@nestjs/common'

import { PrismaService } from '@/core/prisma/prisma.service'
import { User } from '@/generated/prisma/client'

import { CreatePlanInput } from './inputs/create-plan.input'

@Injectable()
export class PlanService {
	public constructor(private readonly prismaService: PrismaService) {}

	public async findMyPlans(user: User) {
		const plans = await this.prismaService.sponsorshipPlan.findMany({
			where: {
				channelId: user.id
			}
		})

		return plans
	}

	public async create(user: User, input: CreatePlanInput) {
		const { title, description, price } = input

		const channel = await this.prismaService.user.findUnique({
			where: {
				id: user.id
			}
		})

		if (!channel.isVerified) {
			throw new ForbiddenException(
				'Creating plans is available only to verified channels'
			)
		}

		// stripe

		return true
	}

	public async remove(planId: string) {
		const plan = await this.prismaService.sponsorshipPlan.findUnique({
			where: {
				id: planId
			}
		})

		if (!plan) {
			throw new NotFoundException('Plan not found')
		}

		// stripe

		await this.prismaService.sponsorshipPlan.delete({
			where: {
				id: plan.id
			}
		})

		return true
	}
}
