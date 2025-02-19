import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getSubscriberRankPosition } from '../functions/getSubscriberRankPosition'

export const getSubscriberRankingPositionRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberId/ranking/position',
      {
        schema: {
          summary: 'Get subscriber invite ranking position',
          tags: ['referral'],
          description: 'This get a subscriber invite clicks count ',
          params: z.object({
            subscriberId: z.string(),
          }),
          response: {
            200: z.object({
              position: z.number().nullable(),
            }),
          },
        },
      },
      async req => {
        const { subscriberId } = req.params

        const { position } = await getSubscriberRankPosition({ subscriberId })

        return { position }
      }
    )
  }
