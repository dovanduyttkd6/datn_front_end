export const defaultRequestList = {
  listTextSearch: [],
  code: null,
  page: 0,
  name: null,
  size: 10,
  // sort: 'createDate,DESC', // -: desc | +: asc,
};


export const DATE_UTC_FORMAT = 'yyyy-MM-ddTHH:mm:ss';
export const startDate = 'startDate'
export const endDate = 'endDate'
export const pageSizeOption = [10, 20, 50, 100]

export const REGEX = {
  MOBILE: /(^[+]?(|0-9)+([0-9]){6,}$)/,
  MULTIPLE_EMAIL: /^(([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)(\s*;\s*|\s*$))*$/,
  $NOT_SPECIAL_CHARACTERS: /^[a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆẾỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴýÝỶỸÝửữựỳỵỷỹ -]{0,1000}$/,
  VALIDATE_CODE: /^[a-zA-Z0-9 _-]+$/,
  VALIDATE_CODE_NOT_SPACE: /^[a-zA-Z0-9_]+$/,
  VALIDATE_CODE_DEPARTMENT: /^[a-zA-Z&0-9_-]+$/,
  ONLY_NUMBER: /^[0-9]*$/,
  TEXT_AND_SPACE: /^[A-Za-z\s]+$/,
  YEAR: /^([1][9][0-9][0-9]|[2][0-9][0-9][0-9]|[3][0][0][0])$/,
  CUSTOM_EMAIL: /^[^<>()[\]\\,;:\%#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/,
  ONLY_NUMBER_AND_PLUS: /^[0-9+]*$/,
  CUSTOM_PHONE: /^[+]?[0-9]{0,12}$/,
  PERCENTAGE: /^[1-9](?:,[0-9]){0,2}$|^[1-9]\d(?:,[0-9]\d){0,2}$|^[1-9](?:,[0-9]\d){0,2}$|^[1-9]\d(?:,[0-9]){0,2}$|^[1-9]\d{0,2}(?:,[0-9]\d){0,2}$|^[1-9]\d{0,2}(?:,[0-9]){0,2}$/,
  NUMBER_AND_COMMA: /^[0-9,]+$/,
  LIMIT: /\b([a-zA-Z]){1,2}[0-9]{1,3}\b/
};






export const TOOLTIP = {
  PLACEMENT_TOP: 'top'
};

export const EMPLOYEE = {
  EMPLOYEE_STATUS: {
    QUIT_JOB: 37,
    DOING: 36,
  },
};
export const INSTALLATION = {
  INSTALLATION_STATUS: {
    NO: 1,
    YES: 2,
    FAIL: 3
  },
  INSTALLATION_CONNECT: {
    NO: "disconnect",
    YES: "connect"
  }
};



export const COLUMNS = {
  INVENTORY:[
    {name: "STT", checked: true, index: 1, disabled: true},
  ]
}

export const TEXT_NO_RESULTS = 'component.base.select.not-found-content';

export const STATUS_CODE_ERROR = {
  LICENSE_EXISTED: 'EDT001',
  TAX_CODE_EXISTED: 'EDT002',
  PART_CODE_NOT_ALLOWED: 'EDT003',
  PERMISSION_CODE_NOT_ALLOWED: 'EDT003',
  PRODUCT_CODE_EXISTED: 'SP001',
  DEPARTMENT_CODE_EXISTED: 'DV001',
};

export const ROLE_LIST = {
  CATEGORY: "CATEGORY", // Quản lý danh mục
}

export const APP_PARAMS_TYPE = {
  SERVICE_STATUS: "SERVICE_STATUS",
  SETTING_STATUS: "SETUP_STATUS",
  CONNECT_STATUS: "CONNECT_STATUS"
}

export const SCROLL_TABLE = {
  SCROLL_X: '1200px',
  SCROLL_Y: '60vh'
}


