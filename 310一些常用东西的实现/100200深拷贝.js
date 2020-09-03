/**
 * 深拷贝
 * 此函数还有部分情况未考虑，如Math，Error,GeneratorFunction,Promise等
 */
export function cloneDeep(obj) {
  // 用于判断环状数据
  // 这里先不考虑了
  const visited = [];

  function clone(obj) {
    switch (Object.prototype.toString.call(obj)) {
      case "[Object Boolean]":
      case "[Object Number]":
      case "[Object String]":
      case "[Object Null]":
      case "[Object Undefined]":
      case "[Object Symbol]":
      case "[Object BigInt]":
      // 这里 function 也采用直接赋值，并不重新创建一个新函数
      case "[Object Function]":
        return obj;
      case "[Object Object]":
        let ans = {};
        for (key in obj) {
          ans[key] = clone(obj[key]);
        }
        return ans;
      case "[Object Array]":
        return obj.map((item) => clone(item));
      case "[Object Date]":
        return new Date(obj);
      case "[Object RegExp]":
        return new RegExp(obj);
    }
  }

  return clone(obj);
}
