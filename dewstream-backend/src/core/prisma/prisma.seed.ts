import { BadRequestException, Logger } from '@nestjs/common'
import { PrismaPg } from '@prisma/adapter-pg'
import { hash } from 'argon2'
import { config } from 'dotenv'
import { expand } from 'dotenv-expand'

import { Prisma, PrismaClient } from '@/generated/prisma/client'

import { CATEGORIES } from './data/categories.data'
import { STREAMS } from './data/streams.data'
import { USERNAMES } from './data/users.data'

expand(config())

const adapter = new PrismaPg({
	connectionString: process.env.POSTGRES_URI
})

const prisma = new PrismaClient({
	adapter,
	transactionOptions: {
		maxWait: 5000,
		timeout: 10000,
		isolationLevel: Prisma.TransactionIsolationLevel.Serializable
	}
})
async function main() {
	try {
		Logger.log('Start of database population')

		await prisma.$transaction([
			prisma.user.deleteMany(),
			prisma.socialLink.deleteMany(),
			prisma.stream.deleteMany(),
			prisma.category.deleteMany()
		])

		await prisma.category.createMany({
			data: CATEGORIES
		})

		Logger.log('Categories successfully created')

		const categories = await prisma.category.findMany()

		const categoriesBySlug = Object.fromEntries(
			categories.map(category => [category.slug, category])
		)

		await prisma.$transaction(async tx => {
			for (const username of USERNAMES) {
				const randomCategory =
					categoriesBySlug[
						Object.keys(categoriesBySlug)[
							Math.floor(
								Math.random() *
									Object.keys(categoriesBySlug).length
							)
						]
					]

				const userExists = await tx.user.findUnique({
					where: {
						username
					}
				})

				if (!userExists) {
					const createdUser = await tx.user.create({
						data: {
							email: `${username}@dewstream.com`,
							password: await hash('12345678'),
							username,
							displayName: username,
							avatar: `/channels/${username}.webp`,
							isEmailVerified: true,
							socialLinks: {
								createMany: {
									data: [
										{
											title: 'Telegram',
											url: `https://t.me/${username}`,
											position: 1
										},
										{
											title: 'YouTube',
											url: `https://youtube.com/@${username}`,
											position: 2
										}
									]
								}
							},
							notificationSettings: {
								create: {}
							}
						}
					})

					const randomTitles =
						STREAMS[randomCategory.slug as keyof typeof STREAMS] ??
						[]
					const randomTitle =
						randomTitles[
							Math.floor(Math.random() * randomTitles.length)
						]

					await tx.stream.create({
						data: {
							title: randomTitle,
							thumbnailUrl: `/streams/${createdUser.username}.webp`,
							user: {
								connect: {
									id: createdUser.id
								}
							},
							category: {
								connect: {
									id: randomCategory.id
								}
							}
						}
					})

					Logger.log(
						`The user "${createdUser.username}" and their stream have been successfully created.`
					)
				}
			}
		})

		Logger.log('Database population completed successfully.')
	} catch (error) {
		Logger.error(error)
		throw new BadRequestException('Error while populating the database')
	} finally {
		Logger.log('Closing the database connection...')
		await prisma.$disconnect()
		Logger.log(
			'The connection to the database has been successfully closed.'
		)
	}
}

main()
