export interface Menu {
  uuid: string;
  name: string;
  icon?: string;
  link?: Array<string>;
  subMenus?: Menu[];
  active?: boolean;
  open?: boolean;
  [propName: string]: any;
}
