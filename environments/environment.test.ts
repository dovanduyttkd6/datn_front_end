// ng build --configuration="test"
export const environment = {
  SERVER_URL: './',
  API_VERSION: '1',
  API_SERVICE: 'recruitment-service',
  APP_VERSION: '2.0.8',
  production: false,
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
    AUTHENTICATION_API: 'http://192.168.100.3:8068/',
    BASE_SERVICE_API: 'http://192.168.100.122:8088/',
  },
};
