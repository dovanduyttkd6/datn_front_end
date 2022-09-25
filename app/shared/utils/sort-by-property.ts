export function sortByProperty(prop, type) {
  if (type === 'descend') {
    return (a, b) => {
      if (typeof a[prop] === 'number') {
        return (b[prop] - a[prop]);
      } else {
        return ((b[prop] < a[prop]) ? -1 : ((b[prop] > a[prop]) ? 1 : 0));
      }
    };
  } else {
    return (a, b) => {
      if (typeof a[prop] === 'number') {
        return (a[prop] - b[prop]);
      } else {
        return (a[prop].localeCompare(b[prop]));
      }
    };
  }
}
