export interface IMenu {
  i?: string;
  icon?: string;
  name: string;
  index: IDBIndex;
  chilidren?: IMenu[];
}
