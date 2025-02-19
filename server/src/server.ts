import fastifyCors from '@fastify/cors'
import fastify from 'fastify'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'

import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'

import { env } from './env'
import { accessInviteLinkRoute } from './routes/accessInviteLinkRoute'
import { getRankingRoute } from './routes/getRankingRoute'
import { getSubscriberInviteCountRouteRoute } from './routes/getSubscriberInviteClicksRoute'
import { getSubscriberInvitesCountRoute } from './routes/getSubscriberInvitesCountRoute'
import { getSubscriberRankingPositionRoute } from './routes/getSubscriberRankingPositionRoute'
import { subscribeToEventRoute } from './routes/subscribeToEventRoute'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, {
  origin: 'http://localhost:3000', //? url do frontend ( url permitida pra fazer requisições nessa API )
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'NLW Connect - Node 🟢',
      version: '0.0.1',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

//! Routes
app.register(subscribeToEventRoute)
app.register(accessInviteLinkRoute)
app.register(getSubscriberInvitesCountRoute)
app.register(getSubscriberInviteCountRouteRoute)
app.register(getSubscriberRankingPositionRoute)
app.register(getRankingRoute)

app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP server running! 🚀')
})
