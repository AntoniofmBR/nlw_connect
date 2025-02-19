import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getSubscriberInvitesCount } from '../functions/getSubscriberInviteCount'

export const getSubscriberInviteCountRouteRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberId/ranking/count',
      {
        schema: {
          summary: 'Get subscriber invites count',
          tags: ['referral'],
          description: 'This get a subscriber invites count ',
          params: z.object({
            subscriberId: z.string(),
          }),
          response: {
            200: z.object({
              count: z.number(),
            }),
          },
        },
      },
      async req => {
        const { subscriberId } = req.params

        const { count } = await getSubscriberInvitesCount({ subscriberId })

        return { count }
      }
    )
  }
