export * from "./shapeFlags";

export const isObject = (val) => {
  return val !== null && typeof val === "object";
};

const camelizeRE = /-(\w)/g;
/**
 * @private
 * 把烤肉串命名方式转换成驼峰命名方式
 */
export const camelize = (str: string): string => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
};

export const extend = Object.assign;

export function hasChanged(value, oldValue) {
  return !Object.is(value, oldValue);
}

/**
 * @private
 * 首字母大写
 */
export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

/**
 * @private
 * 添加 on 前缀，并且首字母大写
 */
export const toHandlerKey = (str: string) =>
  str ? `on${capitalize(str)}` : ``;
