import { CSSProperties } from "vue";
import { RuleItem } from "./rules.types";
export interface IFormOptions {
  // form item type
  type:
    | "cascader"
    | "checkbox"
    | "checkbox-group"
    | "color-picker"
    | "date-picker"
    | "input"
    | "input-number"
    | "radio"
    | "radio-group"
    | "rate"
    | "select"
    | "option"
    | "slider"
    | "switch"
    | "time-picker"
    | "transfer"
    | "upload";
  // 输入框值
  value?: string | any[];
  label?: string;
  prop?: string;
  rules?: RuleItem[];
  placeholder?: string;
  // 其他的属性
  attrs?: {
    clearable?: boolean;
    showPassword?: boolean;
    disabled?: boolean;
    style?: CSSProperties;
  };
  // 子元素
  children?: IFormOptions[];
}
