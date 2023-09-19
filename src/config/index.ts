import * as dotenv from 'dotenv';
dotenv.config();

dotenv.config();
const { env } = process;

export default {
  base_url: env.ARAMEX_USERNAME,
  password: env.ARAMEX_PASSWORD,
  version: env.ARAMEX_VERSION,
  account_number: env.ARAMEX_ACCOUNT_NUMBER,
  account_pin: env.ARAMEX_ACCOUNT_PIN,
  account_entity: env.ARAMEX_ACCOUNT_ENTITY,
  country_code: env.ARAMEX_COUNTRY_CODE
};