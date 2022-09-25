// ng build --prod
export const environment = {
  SERVER_URL: './',
  API_VERSION: '1',
  API_SERVICE: 'vhkt-service',
  APP_VERSION: '1.0.0',
  production: true,
  useHash: false,
  hmr: false,
  cryptoKey: '7bwt+n638BNuTFEY',
  appCode: 'DTHT',
  pro: {
    theme: 'compact',
    menu: 'side',
    contentWidth: 'fluid',
    fixedHeader: true,
    autoHideHeader: true,
    fixSiderbar: true,
    onlyIcon: false,
    colorWeak: false,
  },
  BASE_API_URI: {
    // BASE_SERVICE_API: 'http://10.60.158.105:8063/',
    BASE_SERVICE_API: 'http://10.60.158.110:8063/',
    CLIENT_ADDRESS:    'http://10.60.158.110:8181/vhkt',
    SSO_ADDRESS:       'https://10.58.71.179:8225/sso',
  },
};
