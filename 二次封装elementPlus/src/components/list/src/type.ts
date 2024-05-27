// listItem 每一项
export interface IListItem {
  avatar?: string;
  title?: string;
  desc?: string;
  time?: string;
  tag?: string;
  tagType?: "" | "success" | "info" | "warning" | "danger";
}
// 列表
export interface IListOptions {
  title: string;
  list: IListItem[];
}
// 操作项
export interface IActionOptions {
  text: string;
  icon?: string;
}
