import {environment} from '@env/environment';

export const MenuRouter = {
  getMenu: 'v1/menu/tree',
};

export const AuthenticationRouter = {
  getToken: `${environment.API_SERVICE}/authen/login`,
  getLoginInfo: `${environment.API_SERVICE}/user/getUserInfo`,
  refreshToken: `${environment.API_SERVICE}/user/refreshToken`,
  forgotPassword: `${environment.API_SERVICE}/authen/forgotpassword`,
  registerUser: `${environment.API_SERVICE}/authen/register`,
  changePassword: `${environment.API_SERVICE}/authen/change-password`,
};

export const navigationRouter = {
  getNavigationOwner: `api/v${environment.API_VERSION}/bsd/navigations/owner`,
};

export const trackingRouter = {
  listTracking: `api/v${environment.API_VERSION}/bsd/logs`,
};

export const AppParamsRouter = {
  getAppParamsByType:`${environment.API_SERVICE}/app-param`,
};

export const RolesRouter = {
  getAllRoles: `${environment.API_SERVICE}/role/getAll`,
};

export const CommonRouter = {
  downloadFileById: `${environment.API_SERVICE}/file/`,
  getColumnConfig: `${environment.API_SERVICE}/common/column/getConfig`,
  saveColumnConfig: `${environment.API_SERVICE}/common/column/saveConfig`,
  uploadMultiple: `${environment.API_SERVICE}/file/upload`
};

export const ServerRouter = {
  search: `${environment.API_SERVICE}/server/search`,
  delete: `${environment.API_SERVICE}/test/delete`,
  saveData: `${environment.API_SERVICE}/test/create`,
  update: `${environment.API_SERVICE}/test/save`,
  getDetail:  `${environment.API_SERVICE}/test/getOne`,
}

export const RequestRouter = {
  search: `${environment.API_SERVICE}/request/search`,
  saveData: `${environment.API_SERVICE}/request/create`,
  update: `${environment.API_SERVICE}/request/update`,
  getDetail: `${environment.API_SERVICE}/request/findById`,
  delete: `${environment.API_SERVICE}/request/delete`
}

export const DetailRequestRouter = {
  search: `${environment.API_SERVICE}/detailRequest/search`,
  saveData: `${environment.API_SERVICE}/detailRequest/create`,
  update: `${environment.API_SERVICE}/detailRequest/update`,
  getDetail: `${environment.API_SERVICE}/detailRequest/findById`,
  getAllDetail: `${environment.API_SERVICE}/detailRequest/findByMaYc`,
  delete: `${environment.API_SERVICE}/detailRequest/delete`
}

export const OfferRouter = {
  search: `${environment.API_SERVICE}/offer/search`,
  saveData: `${environment.API_SERVICE}/offer/create`,
  update: `${environment.API_SERVICE}/offer/update`,
  getDetail: `${environment.API_SERVICE}/offer/findById`,
  getAllOffer: `${environment.API_SERVICE}/offer/findByMaDx`,
  delete: `${environment.API_SERVICE}/offer/delete`
}



