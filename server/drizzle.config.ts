import type { Config } from 'drizzle-kit'
import { env } from './src/env'

export default {
  schema: './src/drizzle/schema/*', //? caminho para a pasta onde estão as tabelas
  out: './src/drizzle/migrations', //? arquivos SQL que vão ser gerados pelo Drizzle ( arquivos responsáveis pela criação das tabelas no BD )
  dialect: 'postgresql', //? qual banco está sendo usado
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
} satisfies Config
