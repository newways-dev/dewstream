import { z } from 'zod'

import { IngressInput } from '@/graphql/generated/output'

export const createIngressSchema = z.object({
	ingressType: z.nativeEnum(IngressInput)
})

export type TypeCreateIngressSchema = z.infer<typeof createIngressSchema>
