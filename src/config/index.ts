import { KeyLike } from 'jose';
import dotenv from 'dotenv';
import fs from 'fs';
import * as jose from 'jose';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config();

const databaseUrl = process.env.DB_URL;

const getKey = (keyType: string) => async () => {
  console.log(fs.readFileSync(`keys/${keyType}.key`, 'utf-8'));
  return await jose.importSPKI(
    fs.readFileSync(`keys/${keyType}.key`, 'utf-8'),
    'RSA256'
  );
};

const getPrivateKey = async () =>
  jose.importJWK(
    {
      p:
        'xNeI7lN6-HsHn_XSeofMN4L49hCFOrJDhyx_L7Cp4Uo4ycV-4pEDPYLNsPAag8HF16WkjWOVa5TNbFttgJBt2dxuJkLpDl_THqhiHUkABrQVKXhYhFm1QP0Obbx-QlD09713CAgSIVoNwM6UMCK2sRp7PIg1yt9jeB6iM5Vq0Zs',
      kty: 'RSA',
      q:
        't-rt3l2phU7uVmi73hdIY4WPM5CovuAZeQH7a2VeauN5aVGQENoYMJZxfXMd5Pes9aYpfYWxjxMFSgHR5WjQqEWOepT4XtnJNlfri0iKl1E0GLNEDs2qzwguG8cFrTe6zNJzidj1rqT7pEaxrt9EEmoUVfl-VQk2dRZeCajqA9c',
      d:
        'JL7W0rxV2jli1mJs1DLz268iYXFWf_TJhaLhGh7wW8EzLvxFCVNAmFcLgA0d6PdXKkTwnqV-jTDMDgDZ1qYm_qdlqO3SU9KURr482qFm0ebYB0bz0zpWmbIJuGtZYPQnjEOd7eISFXUtmtIuovDhXThraMzLjqhqh9_A5VqDWBWI7IZNO9pcxeIp6scxqBjR-ADXyIddVksWXKEyBDGvigqu6gCCQxtoM6NnBYOE2gLygjPrsPdnyTNyCMztw-fSiPbS6ge9OsjBOUPcjyca8IHPcQaDzebNRSovX5bx7JVEhJlYS8d5RYCqnfvpaLH6UEM5Hl5g_jn4R61kZiHtrQ',
      e: 'AQAB',
      use: 'sig',
      kid: '7PamQg8J7_azfDOiNK1WliTgw4rZ0S3hOZ8Bw6hvMjk',
      qi:
        'KsojUExjU6EBl37-g8sWiKvSvn3xqtugIgT5XrPkLIkTITwGdrwvuinQCCPlqmgScicKFLiPfw9WVLWCE_RUbnYTSYrSMWBuolaHvl_DuQJCJzWbFz2eFC0BRy0dDU6kkp1aNHjvpKcrgnNor2aRHKW-gqMNfZz4A1t7MDzqaM0',
      dp:
        'gH2haNEdiG3nAEfa6RkT-XiJQzZtgW80HVyyeVL80Y89mphMx2CZmOF1m3ZgGHm4x5fc3l6O_vbXUVAtHqsoyfnV_SvYLgXnLjAEO9GXLskGt1dTkLFuW8nUTVWppWhrP_xxYtDB5Pt_1sgCe5ltYBZFM7JGSvOfXp3Ai6ORYtk',
      dq:
        'UyGuqT9e27Hky0wF9wpBHzMEmoM9syFqgibiNRYZymjNvUwvuV5LZtLps5GwJonJNTQJNwKSUqB_WIdgD7kD77uY_lGNvpnkeFrfThLZCjKbQLru_V37Yh9JcCbSqwwwtFo__UQDMRDD6epGcEvc4hHu5Tmj394NLnmQwf8G3_s',
      n:
        'jWq2zAw3PYT0UNZcflXmg2ennRPT8TJWmPQersa-7ooy9xtvlc9Z96qMi_Anidum2O4rQl-J8JDwRbUaMgAOBeYeGfCBMJX49EwAbxlaSziRnPnl57V2gc5aBopcwl86Sjil3lsSDDnVZV2SySqvDD-wpKV9mA9pbpp2Y0zgCI7QevRiFDhcDuMQC489WwhPN-YKpt1GV03m93dDW7jEnsds_j63GXjV-oNWJinoVYE92g4keyFwA3-3vGg4z7s67rLy6D8aMIuhWuEpUBjVIF9IBAsr3fozSayh9EyPqQadswv40_5IPwwK4Pcl9VuEdQ399Sp4pL2u38m3DNjaLQ',
    },
    'RSA256'
  );
const getPubicKey = async () =>
  jose.importJWK(
    {
      kty: 'RSA',
      e: 'AQAB',
      use: 'sig',
      kid: '7PamQg8J7_azfDOiNK1WliTgw4rZ0S3hOZ8Bw6hvMjk',
      n:
        'jWq2zAw3PYT0UNZcflXmg2ennRPT8TJWmPQersa-7ooy9xtvlc9Z96qMi_Anidum2O4rQl-J8JDwRbUaMgAOBeYeGfCBMJX49EwAbxlaSziRnPnl57V2gc5aBopcwl86Sjil3lsSDDnVZV2SySqvDD-wpKV9mA9pbpp2Y0zgCI7QevRiFDhcDuMQC489WwhPN-YKpt1GV03m93dDW7jEnsds_j63GXjV-oNWJinoVYE92g4keyFwA3-3vGg4z7s67rLy6D8aMIuhWuEpUBjVIF9IBAsr3fozSayh9EyPqQadswv40_5IPwwK4Pcl9VuEdQ399Sp4pL2u38m3DNjaLQ',
    },
    'RSA256'
  );

export default {
  port: process.env.PORT || 8000,
  databaseURL: databaseUrl,
  jwtSecret: process.env.JWT_SECRET,
  logs: {
    level: process.env.LOG_LEVEL,
  },
  endpointPrefix: process.env.ENDPOINT_PREFIX || 'api',
  getPrivateKey: getPrivateKey,
  getPublicKey: getPubicKey,
};
