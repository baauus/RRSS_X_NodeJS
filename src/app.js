import { envs } from './config/env.js'
import { startServer } from './server/server.js'

const main = () => {
	startServer({
		port: envs.PORT,
		public: envs.PUBLIC_PATH,
	})
}

/* Self-invoked agnostic function */
;(async () => {
	main()
})()
