import axios from 'axios';
import config from '../config';


const aramexInstance = axios.create({
  baseURL: `${config.base_url}`,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${config.secret_key}`,
  },
});

const aramexClientInfo = {
    'UserName': config.username,
    'Password': config.password,
    'Version': config.version,
    'AccountNumber': config.account_number,
    'AccountPin': config.account_pin,
    'AccountEntity': config.account_entity,
    'AccountCountryCode': config.country_code,
    'Source': 0,
    'PreferredLanguageCode': null
}

export default {
    aramexInstance,
    aramexClientInfo
}

// export default {terminalAfricaInstance, aramexClientInfo};