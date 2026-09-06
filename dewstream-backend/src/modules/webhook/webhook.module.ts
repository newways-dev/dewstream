import { Module, RequestMethod } from '@nestjs/common'
import type { MiddlewareConsumer } from '@nestjs/common/interfaces'

import { WebhookController } from './webhook.controller'
import { WebhookService } from './webhook.service'

@Module({
	controllers: [WebhookController],
	providers: [WebhookService]
})
export class WebhookModule {
	// public configure(cosumer: MiddlewareConsumer) {
	// 	cosumer
	// 		.apply(RawBodyMiddleware)
	// 		.forRoutes({ path: 'webhook/livekit', method: RequestMethod.POST })
	// }
}
