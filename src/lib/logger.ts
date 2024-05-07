import { createLogger, format, transports } from 'winston';

import { config } from './config';

export const logger = createLogger({
  defaultMeta: { appName: config.appName },
  // format: format.json(),
  level: config.logger.level,
  transports: [new transports.Console({ format: format.simple() })],
});
