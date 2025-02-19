import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getRanking } from '../functions/getRanking'
import { getSubscriberInviteClicks } from '../functions/getSubscriberInviteClicks'

export const getRankingRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/ranking',
    {
      schema: {
        summary: 'Get ranking',
        tags: ['referral'],
        description: 'This route get the rank',
        response: {
          200: z.object({
            ranking: z.array(
              z.object({
                id: z.string(),
                name: z.string(),
                score: z.number(),
              })
            ),
          }),
        },
      },
    },
    async req => {
      const { rankingWithScore } = await getRanking()

      return {
        ranking: rankingWithScore,
      }
    }
  )
}
