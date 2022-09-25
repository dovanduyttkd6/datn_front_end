// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  SERVER_URL: './',
  API_VERSION: '1',
  API_SERVICE: '/datn',
  APP_VERSION: '1.0',
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
    BASE_SERVICE_API: 'http://localhost:8013',
    CLIENT_ADDRESS: 'http://localhost:8111',
    SSO_ADDRESS: 'https://10.0.4.20:8225/sso',
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
