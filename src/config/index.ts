import logger from '../utils/logger';

const { ENV } = process.env;

if (!ENV) {
  logger.error('Missing environment variables!');
  process.exit(1);
}

interface Env {}

const env = {} satisfies Env;

interface Config extends Env {}

export default {
  ...env
} satisfies Config;
