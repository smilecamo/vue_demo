// 驼峰转为连接符号
export const toLine = (str: string) => {
  // let newStr = str.replace(/([A-Z])/g, "-$1").toLocaleLowerCase();
  // newStr = newStr.startsWith("-") ? newStr.substring(1) : newStr;
  return str.replace(/([A-Z])/g, "-$1").toLocaleLowerCase();
  //  解释
  // str.replace(/([A-Z])/g, "-$1"):
  // 正则表达式 ([A-Z]) 匹配每一个大写字母。
  // 捕获组 ([A-Z]) 捕获每个大写字母。
  // g 标志确保匹配所有大写字母。
  // "-" 是插入在每个大写字母前的字符。
  // "$1" 引用第一个捕获组，即匹配的大写字母。
  // 这个步骤会将 "ToiletPaper" 转换为 "-Toilet-Paper"。

  // .toLocaleLowerCase():

  // 该方法将整个字符串转换为小写。
  // 经过这个步骤后，"-Toilet-Paper" 将变为 "-toilet-paper"。
  // newStr.startsWith('-') ? newStr.substring(1) : newStr:

  // 这个条件表达式检查字符串是否以连字符开头。
  // 如果是，则去掉第一个连字符，以确保最终的结果没有前导连字符。
};
