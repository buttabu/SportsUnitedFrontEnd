export function hasValue(data) {
  return (data !== undefined) && (data !== null) && (data !== "") && (data.length !== 0);
}

// obj = [ {key: value, key: value, key: value}, {key: value, key: value, key: value} ]
export function checkExistance(obj, key, value){
  let result = false;
  obj.map( (item) => { if (item[key] === value) result = true });
  return result;
}
