import { redis } from '../redis/client'

interface getSubscriberRankPositionParams {
  subscriberId: string
}

export async function getSubscriberRankPosition({
  subscriberId,
}: getSubscriberRankPositionParams) {
  const rank = await redis.zrevrank('referral:ranking', subscriberId)

  if (rank === null) {
    return { position: null }
  }

  return {
    position: rank + 1,
  }
}
