import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module.js'

import { IS_DEV_ENV } from '../shared/utils/is-dev.util.js'

import { getGraphQLConfig } from './config/graphql.config.js'
import { PrismaModule } from './prisma/prisma.module.js'
import { RedisModule } from './redis/redis.module.js'

@Module({
	imports: [
		ConfigModule.forRoot({
			ignoreEnvFile: !IS_DEV_ENV,
			isGlobal: true,
			expandVariables: true
		}),
		GraphQLModule.forRootAsync({
			driver: ApolloDriver,
			imports: [ConfigModule],
			useFactory: getGraphQLConfig,
			inject: [ConfigService]
		}),
		PrismaModule,
		RedisModule
	]
})
export class CoreModule {}
