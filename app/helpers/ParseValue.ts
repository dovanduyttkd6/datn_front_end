import * as _ from 'lodash';

export const ParsePrice = price => {
  if (price) {
    price = price + '';
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',00 đ';
  }
  return '';
};

export const ParsePriceInput = price => {
  if (price || price === 0) {
    let newprice = price + '';
    newprice = newprice.replace('.', '');
    return newprice.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '';
  }
  return '';
};

export const parserPrice = price => {
  if (price) {
    let newprice = price + '';
    newprice = newprice.split('.').join('');
    return newprice;
  }
  return '';
};

export const round = (val: number, decimal: number) => {
  return Math.round(val * Math.pow(10, decimal) + Number.EPSILON) / Math.pow(10, decimal);
};

export const camelCaseKeys = (obj) => {
  if (!_.isObject(obj)) {
    return obj;
  } else if (_.isArray(obj)) {
    return obj.map((v) => camelCaseKeys(v));
  }
  return _.reduce(obj, (r, v, k) => {
    return {
      ...r,
      [_.camelCase(k)]: camelCaseKeys(v),
    };
  }, {});
};

