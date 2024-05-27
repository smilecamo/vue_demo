import { ElMessage } from "element-plus";
// 复制文本
export const useCopy = (str: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(str);
  } else {
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    // 隐藏此输入框
    textarea.style.position = "fixed";
    textarea.style.clip = "rect(0 0 0 0)";
    textarea.style.top = "10px";
    // 赋值
    textarea.value = str;
    // 选中
    textarea.select();
    // 复制
    document.execCommand("copy", true);
    // 移除输入框
    document.body.removeChild(textarea);
  }
  ElMessage.success("成功");
};
